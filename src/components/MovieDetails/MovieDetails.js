import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Empty, Spin, Icon, Breadcrumb, Tabs, Pagination } from 'antd';
import { Fade } from 'react-reveal';

import * as API from '../../API/MoviesAPI';
import * as CONFIG from '../../config/config';
import { Capitalize } from '../Utils/Utils';
import { removeBg } from '../Utils/Utils';
import Alert from '../Alert/Alert.js';
import MovieMeta from '../MovieMeta/MovieMeta';
import MovieTags from '../Tags/Tags';
import MovieCast from '../Cast/Cast';
import MovieProdCompanies from '../ProdCompanies/ProdCompanies';
import Gallery from '../Gallery/Gallery';
import Videos from '../Videos/Videos';

import './MovieDetails.css'
import Reviews from '../Reviews/Reviews';

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
        if(this.props.match.params.id)
            this._loadMovieInfo({ id : this.props.match.params.id });
        else
            this.props.history.push(CONFIG.ROUTES.HOME) // Redirect to home page if none of the above case matches
    }

    componentDidUpdate(prevProps){
        // console.log(prevProps.location, this.props.location);
        if(this.state.movie && this.state.movie.id != this.props.match.params.id){
            if(this.state.movie.id !== this.props.history.location.state.movie.id){
                this._loadMovieInfo(this.props.history.location.state.movie);
            }
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
        }).catch((error) => {
            let errorBox = <Alert type="error" message={error.toString()} />
            this.setState({ error : errorBox, movie : null, loading : false })
        });
    }

    render() {
        let backdrops, posters, videos, reviews;

        // Handle error and show error message
        if(this.state.error != null && this.state.ignore)
            return this.state.error;

        console.log(this.state.movie);

        if(this.state.movie){
            console.log(this.state.movie)
            let movie = this.state.movie;

            backdrops = movie.images.backdrops;
            posters   = movie.images.posters;
            videos    = movie.videos.results;
            reviews   = movie.reviews.results;

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
                </div>
            );
        }else{
            if(this.state.loading)
                return (<Spin indicator={antIcon}></Spin>);
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
                    <BreadcrumbLinks referer={props.referer} />
                    <br />
                </Fade>
                <Col xs={24} lg={7} className="moviePoster">         <Fade>
                        <img src={poster_path} alt={title} width="294px"/>
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
            <MovieMeta movie={props.movie}/>
        </Col>
    );
}

const Cast = (props) => {
    return (
        <Col span={24} className="cast">
            <MovieCast movie={props.movie}/>
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
    let links, movie, url, name;
    if(props.referer.location.state && props.referer.location.state.referer && props.referer.location.state.referer !== "/"){
        // get movie name
        movie = props.referer.location.state.name
        // Get referer url
        url = props.referer.location.state.referer;
        // extract name from referer
        name = url.split("/")[3].replace("-"," ");
        // capitalize name
        name = Capitalize(name);
    }

    return (
        <Breadcrumb>
            <Breadcrumb.Item key="home">
                <Link to="/"><Icon type="home" /> Home</Link>
            </Breadcrumb.Item>
            {(name) ?
               <Breadcrumb.Item key="referer">
                    <Link to={url}>{name}</Link>
               </Breadcrumb.Item>
            : ''}
            {(movie) ?
                <Breadcrumb.Item key="movie">
                    {movie}
                </Breadcrumb.Item>
            : ''}
        </Breadcrumb>
    )
}

export default MovieDetails;