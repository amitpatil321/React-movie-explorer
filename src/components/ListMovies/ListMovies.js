import React, { Component } from 'react';
import { Row, Col, Spin, Icon, Empty } from 'antd';
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

    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            API.discover(this.props.filter).then(response => {
                this._listMovies(response);
            }).catch((error) => {
                let errorBox = <Alert type="error" message={error.toString()} />
                this.setState({ error : errorBox })
            });
        }
    }

    componentDidMount (){
        if(this.props){
            switch(this.props.type){
                case "trending":{
                    API.getPopularMovies().then(response => {
                        this._listMovies(response);
                    }).catch((error) => {
                        let errorBox = <Alert type="error" message={error.toString()} />
                        this.setState({ error : errorBox })
                    });
                }
                break;
                case "genre":{
                    API.withGenre(this.props.id).then(response => {
                        this._listMovies(response);
                    }).catch((error) => {
                        let errorBox = <Alert type="error" message={error.toString()} />
                        this.setState({ error : errorBox })
                    });
                }
                break;
                default:
                    return null;
            }
        }
    }

    _listMovies(response){
        let list;
        let movies = [];

        list = Object.keys(response.results).map((each_movie, index) => {
            let movie = response.results[each_movie];
            // save movie for later use
            movies.push(movie);

            return (
                <Col xs={12} lg={6} key={movie.id} id={movie.id} className="moviecard">
                    <Fade delay={index * 30}>
                        <MovieCard movie={ movie } />
                    </Fade>
                </Col>
            );
        });
        // .slice(0, CONFIG.MOVIES_PER_PAGE); // We need only 18 results

        this.setState({ list : list, movies : movies });
    }

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

export default ListMovies;