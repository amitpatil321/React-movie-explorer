import React, { Component } from 'react';
import { Row, Col, Spin, Icon, Empty } from 'antd';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Alert from '../Alert/Alert.js';
import MovieCard from '../Card/Card';
import * as API from '../../API/MoviesAPI';
import * as CONFIG from '../../config/config';

import './ListMovies.css';

const antIcon = <Icon type="loading" spin />;

class ListMovies extends Component {
    state = {
        error : null,
        list : <Spin indicator={antIcon}></Spin>,
        movies : {}
    }

    componentDidMount (){
        let list;
        let movies = [];
        API.getPopularMovies().then(response => {
            list = Object.keys(response.results).map((movie, index) => {
                // save movie for later use
                movies.push(response.results[movie]);

                let movie_name = "";
                let { id, title, name, poster_path, vote_average } = response.results[movie];
                
                // Few movies have name property while most of them have title propertly.
                if(title === undefined && name === undefined)
                    return null;
                
                // Check if title is undefined
                movie_name = (title) ? title : name;

                return (
                    <Col span={4} key={id} id={id} className="moviecard" onClick={() => this._movieSelected(id)}>
                        <Fade delay={index * 30}>
                            <MovieCard title={movie_name} poster={poster_path} rating={vote_average} />
                        </Fade>
                    </Col>
                );             
            }); // We need only 12 results

            this.setState({ list : list, movies : movies });

        }).catch((error) => {
            let errorBox = <Alert type="error" message={error.toString()} />
            this.setState({ error : errorBox, list : <Empty /> })
        });
    }
    
    // Movie card clicked
    _movieSelected = (id) => {
        let movieDetails = this.state.movies.find(movie => movie.id === id);

        let name = (movieDetails.title) ? movieDetails.title : movieDetails.name;
        name = name.replace(/ /g,"-");
        this.props.history.push({
            pathname: CONFIG.MOVIE_DETAILS_PAGE+name,
            state: { movie : movieDetails }
        })
    }

    render(){
        return(
            <>
                <Row>
                    <Col span={20}><h2>{this.props.title}</h2></Col>
                    <Col span={4} className="float-right"><h3><a href="#">View All</a></h3></Col>
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