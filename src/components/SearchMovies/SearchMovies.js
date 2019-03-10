import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import debounce from 'lodash/debounce';

import * as API from '../../API/MoviesAPI';
import * as CONFIG from '../../config/config';

const Option = AutoComplete.Option;

function onSelect(value) {
    console.log('onSelect', value);
}
  
class SearchMovies extends Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        let _this = this;
        let names = [];
        if(value.length){
            API.searchMovies(value).then(response => {
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
        console.log(movie);
        let poster_path = (movie.poster_path != null) ? "http://image.tmdb.org/t/p/w185/"+movie.poster_path : CONFIG.DEFAULT_POSTER;
        return (
            <Option key={movie.id} text={movie.title}>
                <img src={poster_path} width={50} height={60} />&nbsp;{movie.title} ({movie.release_date.split("-")[0]})
            </Option>
          );        
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource.map(this._renderMovieName)}
                style={{ width: 400 }}
                onSelect={onSelect}
                onSearch={debounce(this.handleSearch, 200)}
                placeholder="Search Movie..."
            />              
        );
    }
}

export default SearchMovies;