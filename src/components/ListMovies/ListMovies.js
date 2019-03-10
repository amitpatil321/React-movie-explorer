import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';

import Alert from '../Alert/Alert.js';
import MovieCard from '../Card/Card';
import * as API from '../../API/MoviesAPI';

import './ListMovies.css';

class ListMovies extends Component {
    state = {
        error : null,
        list : <Spin ></Spin>
    }

    componentDidMount (){
        let list;
        setTimeout(() => {
            API.getPopularMovies().then(response => {
                list = Object.keys(response.results).map(movie => {
                let movie_name = "";
                let { id, title, name, poster_path, vote_average } = response.results[movie];
                // console.log(response.results[movie].title);
                // Check if title is undefined
                movie_name = (title) ? title : name;
                
                // Few movies have name property while most of them have title propertly.
                if(title === undefined && name === undefined) return;
                
                return (
                    <Col span={4} key={id} className="moviecard">
                        <MovieCard title={movie_name} poster={poster_path} rating={vote_average} />
                    </Col>
                );             
                }).slice(14); // We need only 12 results

                this.setState({ list : list });

            }).catch((error) => {
            let errorBox = <Alert type="error" message={error.toString()} />
            this.setState({ error : errorBox })
            });
        }, 1000);    
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

export default ListMovies;