import React, { Component } from 'react';
import { AutoComplete, Rate } from 'antd';
import debounce from 'lodash/debounce';
// import {find} from 'lodash';
import { withRouter } from 'react-router-dom';

import './SearchMovies.css';
import * as API from '../../API/MoviesAPI';
import { makeUrl } from '../Utils/Utils';
import * as CONFIG from '../../config/config';

const Option = AutoComplete.Option;

class SearchMovies extends Component {
    state = {
        dataSource: [],
    }

    _handleSearch = (value) => {
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

    _renderMovieName(movie){
        // Check if poster image availabe
        let poster_path = (movie.poster_path) ? 
        CONFIG.IMAGE_SIZE.SMALL+movie.poster_path : CONFIG.NO_PHOTO.POSTER;        

        return (
            <Option key={movie.id} text={movie.title}>
                <img src={poster_path} width={50} height={60} alt={movie.title} />
                <div className="searchItem">
                    &nbsp;<strong>{movie.title}</strong>
                    &nbsp;{(movie.release_date) ? "("+movie.release_date.split("-")[0]+")" : '' }
                    <div>
                        {(movie.overview) ? movie.overview.substring(0,50)+"..." : ''}
                    </div>
                    <div><Rate allowHalf defaultValue={movie.vote_average / 2} tooltips={movie.rating} disabled /></div>
                </div>    
            </Option>
          );        
    }

    _onSelect = (value, options) => {
        if(!value) return;
        
        // Get all details of selected moview and pass to next page
        let movieDetails = (this.state.dataSource.find(movie => movie.id === parseInt(value)));
        let name = options.props.text;
        this.props.history.push({
            pathname: CONFIG.ROUTES.MOVIE+makeUrl(name),
            state: { movie : movieDetails }
        })        
    }    

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource.map(this._renderMovieName)}
                style={{ width: 400 }}
                onSelect={this._onSelect}
                onSearch={debounce(this._handleSearch,1000)} // Add some delay to search
                placeholder="Search Movie..."
                optionLabelProp="text"
                allowClear = {true}
            />              
        );
    }
}


export default withRouter(SearchMovies);