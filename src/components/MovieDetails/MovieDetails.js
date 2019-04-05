import React, { Component } from 'react';
import { Row, Col, Typography, Empty } from 'antd';
import { Fade } from 'react-reveal';

import * as API from '../../API/MoviesAPI';
import * as CONFIG from '../../config/config';
import Alert from '../Alert/Alert.js';
import MovieMeta from '../MovieMeta/MovieMeta';
import Tags from '../Tags/Tags';
import Cast from '../Cast/Cast';
import ProdCompanies from '../ProdCompanies/ProdCompanies';

import './MovieDetails.css'

const { Title, Paragraph } = Typography;

class MovieDetails extends Component {
    state = {
        movie : null,
        error : null,
        ignore : false // Whether to ignore to this error ?
    }

    componentDidMount(){
        // Show whatever we have quickly and then we load more details later
        if(this.props.location.state){
            this.setState({ movie : this.props.location.state.movie });
            // Load other details
            let movieId = this.props.location.state.movie.id;
            API.movieDetails(movieId).then(response => {
                let details = { ...this.state.movie, ...response };
                this.setState({ movie : details });
            }).catch((error) => {
                let errorBox = <Alert type="error" message={error.toString()} />
                this.setState({ error : errorBox, ignore : false })
            });

            // Load movie cast
            API.movieCast(movieId).then(response => {
                let details = { ...this.state.movie, ...response };
                this.setState({ movie : details });            
            }).catch((error) => {
                let errorBox = <Alert type="error" message={error.toString()} />
                this.setState({ error : errorBox, ignore :  true })
            });
        }else
            this.props.history.push(CONFIG.ROUTES.HOME)

    }

    componentWillReceiveProps(){
        this.setState({ movie : this.props.history.location.state.movie });
    }

    render() {
        let tags = "";
        let companies = "";
        let casts = "";

        // Handle error and show error message
        if(this.state.error != null && !this.state.ignore)
            return this.state.error;

        if(this.state.movie){
            // Destructuring
            let { title, name, backdrop_path, poster_path, tagline, overview } = this.state.movie;

            // Check whether title OR name provided
            title = (title) ? title : name;

            // Set background image
            let backgroundImage = "http://image.tmdb.org/t/p/original"+ backdrop_path;
                document.getElementById("mainContent").style.backgroundImage = 'url("'+backgroundImage+'")';
                
                return (
                        <div className="movieDetails">
                            <Row gutter={16}>
                                <Col xs={24} lg={7} className="moviePoster">                  <Fade>
                                        <img src={"http://image.tmdb.org/t/p/w342"+poster_path} alt={title} width="294px"/>
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
                                            <Tags movie = {this.state.movie} />
                                        </div>
                                    </Fade>
                                </Col>
                                
                                <Col xs={24} lg={16} className="prodCompanies" type="flex">
                                    <ProdCompanies movie = {this.state.movie} />
                                </Col>  
                                
                                <Col xs={24} lg={16}>
                                    <MovieMeta movie={this.state.movie}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col span={24} className="cast">
                                    <Cast movie={this.state.movie}/>
                                </Col>
                            </Row>
                        </div>
                );
        }else 
            return (<Empty />);
    }
}

export default MovieDetails;