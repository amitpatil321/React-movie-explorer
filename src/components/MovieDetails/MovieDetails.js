import React, { Component, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Empty, Spin, Icon, Breadcrumb, Tabs, Pagination } from 'antd';
import { Fade } from 'react-reveal';
import Img from 'react-image';

import * as API from '../../API/MoviesAPI';
import * as CONFIG from '../../config/config';
import { Capitalize, extractUrl } from '../Utils/Utils';
import { removeBg } from '../Utils/Utils';
import Alert from '../Alert/Alert.js';
import MovieTags from '../Tags/Tags';
import MovieProdCompanies from '../ProdCompanies/ProdCompanies';
import Gallery from '../Gallery/Gallery';
import Videos from '../Videos/Videos';
import './MovieDetails.css'
import Reviews from '../Reviews/Reviews';

const MovieMeta = lazy(() => import('../MovieMeta/MovieMeta'));
const MovieCast = lazy(() => import('../Cast/Cast'));
const Similar   = lazy(() => import('../Similar/Similar'));

const { Title, Paragraph } = Typography;
const antIcon = <Icon type="loading" spin />;
const TabPane = Tabs.TabPane;

class MovieDetails extends Component {
    state = {
        movie : null,
        error : null,
        loading : false,
        currPage : 1
    }

    componentDidMount(){
        // If user came by entering url and not clicking movie card ?
        if(this.props.match.params.id){
            // console.log("componentDidMount");
            this._loadMovieInfo({ id : this.props.match.params.id });
        }else
            this.props.history.push(CONFIG.ROUTES.HOME) // Redirect to home page if none of the above case matches
    }

    componentDidUpdate(prevProps){
        if (this.state.movie && this.state.movie.id !== parseInt(this.props.match.params.id)){
            this._loadMovieInfo({ id: this.props.match.params.id}); // Load movie with id in url
            // remove previous background image
            removeBg();
        }
    }

    componentWillUnmount() {
        // remove background image
        removeBg();
    }

    _loadMovieInfo(movie){
        let movieId = movie.id;
        // set loading to true
        if(!this.state.loading)
            this.setState({ loading : true });

        API.movieDetails(movieId).then(response => {
            let details = { ...this.state.movie, ...response };
            this.setState({ movie : details, loading : false });
            // console.log("_loadMovieInfo setstate");
        }).catch((error) => {
            let errorBox = <Alert type="error" message={error.toString()} />
            this.setState({ error : errorBox, movie : null, loading : false })
        });
    }

    render() {
        let backdrops, posters, videos, reviews, similar;

        // Handle error and show error message
        if(this.state.error != null && this.state.ignore)
            return this.state.error;

        if (this.state.loading)
            return (<Spin indicator={antIcon}></Spin>);

        if(this.state.movie && !this.state.loading){
            let movie = this.state.movie;

            backdrops = movie.images.backdrops;
            posters   = movie.images.posters;
            videos    = movie.videos.results;
            reviews   = movie.reviews.results;
            similar   = movie.similar.results;

            return (
                <div className="movieDetails">
                    <Row gutter={16}>
                        <MovieInfo movie={movie} referer={this.props}/>
                        <Companies movie={movie} />
                        <Meta movie={movie} />
                    </Row>
                    <Row>
                        <Cast movie={movie} />
                    </Row>
                    <Row>
                        <Tabs defaultActiveKey="1" onChange={()=> this.setState({ currPage : 1 })}>
                            <TabPane tab={"Videos ("+videos.length+")"} key="1">
                                {( videos.length > CONFIG.META_ITEMS_PERPAGE)  ?
                                    <Pagination current={this.state.currPage} total={videos.length} pageSize={CONFIG.META_ITEMS_PERPAGE} onChange={(page)=>this.setState({ currPage : page })} />
                                : ''}
                                <Videos list={videos} currentPage={this.state.currPage}/>
                            </TabPane>
                            <TabPane tab={"Images ("+backdrops.length+")"} key="2">
                                <Pics list={backdrops} />
                            </TabPane>
                            <TabPane tab={"Posters ("+posters.length+")"} key="3">
                                <Pics list={posters} />
                            </TabPane>
                            <TabPane tab={"Reviews ("+reviews.length+")"} key="4">
                                <Reviews list={reviews}/>
                            </TabPane>
                        </Tabs>
                    </Row>
                    {(similar.length) ?
                        (
                            <>
                                <Suspense fallback={antIcon} >
                                    <br/><br/>
                                    <Row>
                                        <h2>You may also like</h2>
                                        <hr />
                                        <Similar list={similar} />
                                    </Row>
                                </Suspense>
                            </>
                        )
                    : ''}
                </div>
            );
        }else{
            return (<Empty description={ "Failed to load movie details! Please try again" } />);
        }
    }
}

const MovieInfo = (props) => {
    if(props.movie){
        // Destructuring
        let { title, name, backdrop_path, poster_path, tagline, overview } = props.movie;

        // Check whether title OR name provided
        title   = (title) ? title : name;

        // Check if poster image availabe
        poster_path = (poster_path) ?
        CONFIG.IMAGE_SIZE.MEDIUM+poster_path : CONFIG.NO_PHOTO.POSTER

        // Set background image
        let backgroundImage = CONFIG.IMAGE_SIZE.ORIGINAL+ backdrop_path;
            document.getElementById("layout").style.backgroundImage = 'url("'+backgroundImage+'")';

        // check if referer is there ?
        return (
            <>
                <Fade>
                    <BreadcrumbLinks referer={props.referer} movie={props.movie}/>
                    <br />
                </Fade>
                <Col xs={24} lg={7} className="moviePoster">
                    <Fade>
                        <Img loader={antIcon} src={poster_path} alt={title} width="294px"/>
                    </Fade>
                </Col>
                <Col xs={{span:24, offset : 0}} lg={16} offset={1}>
                    <Fade>
                        <Title className="movieName">
                            {title}
                        </Title>
                        <Title level={2} className="movieTagline">{tagline}</Title>
                        <Paragraph className="overview">
                            {overview}
                        </Paragraph>
                        <div className="tags">
                            <MovieTags movie = {props.movie} />
                        </div>
                    </Fade>
                </Col>
            </>
        );
    }
}

const Companies = (props) => {
    return (
        <Col xs={24} lg={16} className="prodCompanies" type="flex">
            <MovieProdCompanies movie = {props.movie} />
        </Col>
    );
}

const Meta = (props) => {
    return (
        <Col xs={24} lg={16}>
            <Suspense fallback={antIcon} >
                <MovieMeta movie={props.movie}/>
            </Suspense>
        </Col>
    );
}

const Cast = (props) => {
    return (
        <Col span={24} className="cast">
            <Suspense fallback={antIcon} >
                <MovieCast movie={props.movie}/>
            </Suspense>
        </Col>
    );
}

const Pics = (props) => {
    if(props.list){
        let [currPage, changePage] = useState(1);
        return (
            <>
                {(props.list.length > CONFIG.META_ITEMS_PERPAGE)  ?
                    <Pagination current={currPage} total={props.list.length} pageSize={CONFIG.META_ITEMS_PERPAGE} onChange={(page)=>changePage(page)} />
                    : ''}
                <Gallery list={props.list} currentPage={currPage} />
            </>
        )
    }else
        return <Empty description={CONFIG.ERRORS.NOTHING_TO_SHOW} />
}

const BreadcrumbLinks = (props) => {
    let movie_name, referer, referer_link;

    // get movie name
    movie_name = (props.movie.title) ? props.movie.title : props.movie.name;

    // Check if page has referer ?
    if (props.referer.location && props.referer.location.state){
        if (props.referer.location.state.referer && props.referer.location.state.referer.length > 1){ // > 1 Because if there is no referer then it holds value "/"
            referer_link = props.referer.location.state.referer;
            referer = extractUrl(referer_link, "name") // get movie name from url
        }
    }

    return (
        <Breadcrumb>
            <Breadcrumb.Item key="home">
                <Link to="/"><Icon type="home" /> Home</Link>
            </Breadcrumb.Item>
            {referer ?
                <Breadcrumb.Item key="referer">
                    <Link to={referer_link}>{Capitalize(referer)}</Link>
                </Breadcrumb.Item> : ''
            }
            <Breadcrumb.Item key="moviename">
                {Capitalize(movie_name)}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default MovieDetails;