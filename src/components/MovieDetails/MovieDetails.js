import React, { Component } from 'react';
import { Row, Col, Typography, Empty } from 'antd';
import { Fade } from 'react-reveal';

import * as API from '../../API/MoviesAPI';
import * as CONFIG from '../../config/config';
import Alert from '../Alert/Alert.js';
import MovieMeta from '../MovieMeta/MovieMeta';
import MovieTags from '../Tags/Tags';
import MovieCast from '../Cast/Cast';
import MovieProdCompanies from '../ProdCompanies/ProdCompanies';

import './MovieDetails.css'

const { Title, Paragraph } = Typography;

class MovieDetails extends Component {
    state = {
        movie : null,
        error : null
    }

    _loadMovieInfo(movie){
        // Show whatever details we have, and then load remaining
        this.setState({ movie : movie });
        let movieId = movie.id;
        API.movieDetails(movieId).then(response => {
            let details = { ...this.state.movie, ...response };
            this.setState({ movie : details });
        }).catch((error) => {
            let errorBox = <Alert type="error" message={error.toString()} />
            this.setState({ error : errorBox })
        });
    }

    componentDidMount(){
        if(this.props.location.state){
            this._loadMovieInfo(this.props.location.state.movie);
        }else
            this.props.history.push(CONFIG.ROUTES.HOME)
    }

    componentWillReceiveProps(nextProps){
        this._loadMovieInfo(nextProps.history.location.state.movie);
    }

    render() {
        // Handle error and show error message
        if(this.state.error != null && this.state.ignore)
            return this.state.error;

        if(this.state.movie){
            let movie = this.state.movie;
            return (
                <div className="movieDetails">
                    <Row gutter={16}>
                        <MovieInfo movie={movie} />
                        <Companies movie={movie} />
                        <Meta movie={movie} />
                    </Row>
                    <Row>
                        <Cast movie={movie} />
                    </Row>
                </div>
            );
        }else 
            return (<Empty />);
    }
}

const MovieInfo = (props) => {
    if(props.movie){
        // Destructuring
        let { title, name, backdrop_path, poster_path, tagline, overview } = props.movie;

        // Check whether title OR name provided
        title = (title) ? title : name;
        
        // Check if poster image availabe
        poster_path = (poster_path) ? 
        CONFIG.IMAGE_SIZE.MEDIUM+poster_path : CONFIG.NO_PHOTO.POSTER

        // Set background image
        let backgroundImage = CONFIG.IMAGE_SIZE.ORIGINAL+ backdrop_path;
            document.getElementById("mainContent").style.backgroundImage = 'url("'+backgroundImage+'")';
        return (
            <>
                <Col xs={24} lg={7} className="moviePoster">                  <Fade>
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

export default MovieDetails;