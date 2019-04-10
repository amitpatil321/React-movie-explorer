import React, { Component } from 'react';
import { Row, Col, Spin, Icon, Empty } from 'antd';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Alert from '../Alert/Alert.js';
import MovieCard from '../Card/Card';
import * as API from '../../API/MoviesAPI';
import * as CONFIG from '../../config/config';
import { makeUrl } from '../Utils/Utils';

import './ListMovies.css';

const antIcon = <Icon type="loading" spin />;

class ListMovies extends Component {
    state = {
        error : null,
        list : <Spin indicator={antIcon}></Spin>,
        movies : {}
    }

    componentDidMount (){
        switch(this.props.type){
            case "trending":{
                API.getPopularMovies().then(response => {
                    this._listMovies(response);
                }).catch((error) => {
                    let errorBox = <Alert type="error" message={error.toString()} />
                    this.setState({ error : errorBox, list : <Empty /> })
                });                     
            }
            case "genre":{
                API.withGenre(this.props.id).then(response => {
                    this._listMovies(response);
                }).catch((error) => {
                    let errorBox = <Alert type="error" message={error.toString()} />
                    this.setState({ error : errorBox, list : <Empty /> })
                });
            }
        }
    }

    _listMovies(response){
        let list;
        let movies = [];

        list = Object.keys(response.results).map((movie, index) => {
            // save movie for later use
            movies.push(response.results[movie]);

            let movie_name = "";
            let { id, title, name, poster_path, vote_average, overview } = response.results[movie];
            
            // Few movies have name property while most of them have title propertly.
            if(title === undefined && name === undefined)
                return null;
            
            // Check if title is undefined
            movie_name = (title) ? title : name;

            return (
                <Col xs={12} lg={6} key={id} id={id} className="moviecard" onClick={() => this._movieSelected(id)}>
                    <Fade delay={index * 30}>
                        <MovieCard title={movie_name} poster={poster_path} rating={vote_average} desc={overview} />
                    </Fade>
                </Col>
            );             
        }).slice(0, CONFIG.MOVIES_PER_PAGE); // We need only 18 results

        this.setState({ list : list, movies : movies });
    }
    
    // Movie card clicked
    _movieSelected = (id) => {
        let movieDetails = this.state.movies.find(movie => movie.id === id);
        let name = (movieDetails.title) ? movieDetails.title : movieDetails.name;
        this.props.history.push({
            pathname: CONFIG.ROUTES.MOVIE+makeUrl(name),
            state: { movie : movieDetails }
        });
    }

    // _applyBg(){
    //     // generate random number
    //     var randomnumber = Math.floor(Math.random() * (CONFIG.MOVIES_PER_PAGE - 0 + 1)) + 0;
    //     // get image 
    //     let backdrop_path = this.state.movies[randomnumber].backdrop_path;
    //     let backgroundImage = CONFIG.IMAGE_SIZE.ORIGINAL + backdrop_path;
    //     // Apply image as bg
    //     document.getElementById("mainContent").style.backgroundImage = 'url("'+backgroundImage+'")';        
    // }

    render(){
        return(
            <>
                <Row>
                    <Col span={24}><h2>{this.props.title}</h2></Col>
                </Row>
                <hr />
                <Row gutter={16}>
                    {this.state.error}
                    {this.state.list}
                </Row>  

            </>
        )
    }
}

export default withRouter(ListMovies);