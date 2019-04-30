import React, { Component } from 'react';
import { AutoComplete, Tag, Row, Col } from 'antd';
import { Typography } from 'antd';
import debounce from 'lodash/debounce';
import { withRouter } from 'react-router-dom';

import './SearchMovies.css';
import * as API from '../../API/MoviesAPI';
import { makeUrl } from '../Utils/Utils';
import * as CONFIG from '../../config/config';

const { Paragraph } = Typography;
const Option = AutoComplete.Option;

class SearchMovies extends Component {
    state = {
        dataSource : [],
        searchText : ''
    }

    _handleSearchDebounced = (value) => {
        // Create a reference to "this"
        let _this = this;
        let names = [];
        if(value.length){
            return API.searchMovies(value).then(response => {
                response.results.map(each => {
                    names.push(each);
                });
                _this.setState({ dataSource : names });
            });
        }else{
            //clear results if input is blank
            _this.setState({ dataSource : [] });
        }
    }

    _handleSearch = debounce(this._handleSearchDebounced, 500);

    _setText = (value) => {
        this.setState({ searchText : value })
        this._handleSearch(value);
    }

    _renderMovieName(movie){
        let { id, title, poster_path, release_date, overview, vote_average, genre_ids } = movie;
        // Check if poster image availabe
        poster_path  = (poster_path) ? CONFIG.IMAGE_SIZE.SMALL+poster_path : CONFIG.NO_PHOTO.POSTER;
        release_date = (release_date) ? "(" + release_date.split("-")[0] + ")" : '';
        if (genre_ids){
            genre_ids    = genre_ids.map(genreid => {
                let color = CONFIG.COLORS[Math.floor(Math.random() * CONFIG.COLORS.length)];
                return <Tag key={genreid} color={color}>{CONFIG.GENRE_FILTER.find(genreObj => parseInt(genreid) === genreObj.id).name}</Tag>
            });
        }

        return (
            <Option key={id} text={title}>
                <Row className="searchItem" gutter={8}>
                    <Col xs={5} lg={4}>
                        <div className="movieRating">{vote_average}</div>
                        <img src={poster_path} width={"100%"} height={80} alt={title} />
                    </Col>
                    <Col xs={19} lg={20}>
                        <strong>{title}</strong> {release_date}
                        <Paragraph ellipsis={{ rows : 2 }}>{overview}</Paragraph>
                        {genre_ids}
                    </Col>
                </Row>
            </Option>
          );
    }

    _onSelect = (value, options) => {
        if(!value) return;

        // Clear searchtext value and results
        this.setState({ searchText: "", dataSource: [] })

        // Get all details of selected moview and pass to next page
        let movieDetails = (this.state.dataSource.find(movie => movie.id === parseInt(value)));
        // If used immediately clicks on multitple tags in search results then belowc case occurs
        if (!movieDetails) return

        let name = options.props.text;
        this.props.history.push({
            pathname: CONFIG.ROUTES.MOVIE+movieDetails.id+"/"+makeUrl(name),
            state: { movie : movieDetails }
        })

    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                value           = {this.state.searchText}
                className       = "searchMovies"
                dataSource      = {dataSource.map(this._renderMovieName)}
                style           = {{ width: "40%" }}
                onSelect        = {this._onSelect}
                onSearch        = {this._setText}
                placeholder     = "Search Movie..."
                optionLabelProp = "text"
                allowClear      = {true}
            />
        );
    }
}


export default withRouter(SearchMovies);