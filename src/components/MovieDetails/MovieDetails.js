import React, { Component } from 'react';
import { Row, Col, Typography, Tag, Divider, Empty, Tooltip } from 'antd';
import { Fade,Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

import * as API from '../../API/MoviesAPI';
import * as CONFIG from '../../config/config';
import Alert from '../Alert/Alert.js';
import MovieMeta from '../MovieMeta/MovieMeta';
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
    }

    componentWillReceiveProps(){
        this.setState({ movie : this.props.history.location.state.movie });
    }

    _getTags(){
        return this.state.movie.genres.map(genre => {
            return <Tag key={genre.id} color={'#'+Math.random().toString(16).substr(-6)}>{genre.name}</Tag>
        });
    }

    _getProductionCompanies(companies){
        let arrCompanies = Object.keys(companies);
        let pic, company;
        return arrCompanies.map((element, index) => {
            company = companies[element];
            pic = CONFIG.NO_LOGO_PHOTO;
            if(company.logo_path)
                pic = "https://image.tmdb.org/t/p/w264_and_h264_bestv2/"+company.logo_path;        

            return (
                <Col xs={6} lg={3} key={index}>
                    <Zoom delay={index * 80}>
                        <Tooltip placement="bottom" title={company.name}>
                            <Link to={CONFIG.PRODUCTION_COMPANY+company.id+"/"+company.name}>
                                <img src={pic} alt={company.name} width={50}/>
                                {/* <p>{company.name}</p> */}
                            </Link>
                        </Tooltip>
                    </Zoom>        
                </Col>
            );          
        }).slice(0, CONFIG.COMPANIES_PER_PAGE); // We need only 8 results;
    }

    _getCast(casts){
        return casts.map((person, index) => {
            // Check if photo is null ?
            let pic = CONFIG.NO_PERSON_PHOTO;
            if(person.profile_path)
                pic = "https://image.tmdb.org/t/p/w264_and_h264_bestv2/"+person.profile_path;
            return <Col xs={12} lg={3} key={index}>
                <Zoom delay={index * 80}>
                    <Link to={CONFIG.PERSON_PROFILE+person.id+"/"+person.name}>
                        <img src={pic} className="actorPic" alt={person.name}/>
                        <p>
                            <strong>{person.name}</strong><br />
                            <i>{person.character}</i>
                        </p>
                    </Link>
                </Zoom>        
            </Col>
        }).slice(0, CONFIG.CAST_PER_PAGE); // We need only 8 results;
    }

    render() {
        let tags = "";
        let companies = "";
        let casts = "";

        // Handle error and show error message
        if(this.state.error != null && !this.state.ignore)
            return this.state.error;

        if(this.state.movie){
            console.log(this.state.movie);
            // Destructuring
            let { title, name, production_companies, genres, backdrop_path, poster_path, tagline, overview, cast } = this.state.movie;

            // Check whether title OR name provided
            title = (title) ? title : name;
            
            // List movie production companies
            if(production_companies)
                companies = this._getProductionCompanies(production_companies);

            if(cast){
                casts = this._getCast(cast);
            }

            if(genres)
                tags = this._getTags();

            let backgroundImage = "http://image.tmdb.org/t/p/original"+ backdrop_path;
                document.getElementById("mainContent").style.backgroundImage = 'url("'+backgroundImage+'")';
                return (
                        <div className="movieDetails">
                            <Row gutter={16}>
                                <Col xs={24} lg={7} className="moviePoster">                    
                                    <Fade>
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
                                        <div className="tags">{tags}</div>
                                    </Fade>
                                </Col>
                                
                                <Col xs={24} lg={16} className="prodCompanies" type="flex">
                                    {companies}
                                </Col>  
                                
                                <Col xs={24} lg={16}>
                                    <MovieMeta movie={this.state.movie}/>
                                </Col>

                            </Row>
                            <Row>
                                <Col span={24} className="cast">
                                    {casts}
                                </Col>
                            </Row>
                        </div>
                );
        }else 
            return (<Empty />);
    }
}

export default MovieDetails;