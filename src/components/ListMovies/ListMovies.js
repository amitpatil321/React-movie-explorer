import React, { Component } from 'react';
import { Row, Col, Spin, Icon } from 'antd';
import Fade from 'react-reveal/Fade';
import isEqual from 'lodash/isEqual';


import Alert from '../Alert/Alert.js';
import MovieCard from '../Card/Card';
import * as API from '../../API/MoviesAPI';

import './ListMovies.css';

const antIcon = <Icon type="loading" spin />;

class ListMovies extends Component {
    state = {
        error: null,
        movies: [],
        isLoading: false,
        list: [],
        topLoader: false
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(this.props, prevProps || this.props.page > prevProps.page)) {
            // If filter parameters changed then clear old movies array
            // If filters didnt changed only page number did then concat new data to existing movies list
            if (this.props.filters !== prevProps.filters) {
                this.setState({ movies: [], topLoader: true });
            }
            this._getMovies()
        }
    }

    componentDidMount() {
        if (this.props) {
            this._getMovies();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!isEqual(this.props, nextProps) || !isEqual(this.state, nextState) || !this.state.movies.length)
            return true;
        return false;
    }

    _getMovies() {
        switch (this.props.type) {
            case "trending":
                this.setState({ isLoading: true });
                API.getPopularMovies().then(response => {
                    this._listMovies(response);
                }).catch((error) => {
                    let errorBox = <Alert type="error" message={error.toString()} />
                    this.setState({ error: errorBox })
                });
                break;
            case "genre":
                this.setState({ isLoading: true });
                API.withGenre(this.props.id,this.props.page).then(response => {
                    this._listMovies(response);
                }).catch((error) => {
                    let errorBox = <Alert type="error" message={error.toString()} />
                    this.setState({ error: errorBox })
                });
                break;
            case "discover":
                this.setState({ isLoading: true });
                API.discover(this.props.filters, this.props.page).then(response => {
                    this._listMovies(response);
                }).catch((error) => {
                    let errorBox = <Alert type="error" message={error.toString()} />
                    this.setState({ error: errorBox })
                });
                break;
            default:
                return null;
        }
    }

    _listMovies(response) {

        let list;

        this.setState(prevState => ({
            movies: prevState.movies.concat(response.results)
        }));

        list = this.state.movies.map((each_movie, index) => {
            let movie = each_movie;
            return (
                <Col xs={12} lg={6} key={movie.id + Math.random()} id={movie.id} className="moviecard">
                    <Fade>
                        <MovieCard movie={movie} />
                    </Fade>
                </Col>
            );
        });

        this.setState({ list: list, isLoading: false, topLoader: false });
    }

    render() {

        if (this.state.topLoader)
            return <Spin indicator={antIcon}></Spin>
        return (
            <>
                <Row>
                    <Col span={24}><h2>{this.props.title}</h2></Col>
                </Row>
                <br/>
                <Row gutter={16}>
                    {this.state.error}
                    {this.state.list}
                    {(this.state.isLoading) ? <><Spin indicator={antIcon}></Spin><br /><br /></> : ''}
                </Row>
            </>
        )
    }
}

export default ListMovies;