import React, { Component } from 'react';
import { Rate } from 'antd';
import { withRouter } from 'react-router-dom';

import './Card.css';
import * as CONFIG from '../../config/config';
import { makeUrl } from '../Utils/Utils';

class MovieCard extends Component {

    // Movie card clicked
    _movieSelected = (id) => {
        let movie = this.props.movie;
        let name = (movie.title) ? movie.title : movie.name;
        this.props.history.push({
            pathname: CONFIG.ROUTES.MOVIE+movie.id+"/"+makeUrl(name),
            state: { movie : movie, name : name, referer : this.props.location.pathname }
        });
    }

    render(){
        // let movie_name, job, rating, desc;
        let { id, title, name, poster_path, vote_average, overview, job } = this.props.movie;
        let rating = vote_average;
        // Few movies have name property while most of them have title propertly.
        if(title === undefined && name === undefined)
            return null;

        // Check if title is undefined
        title = (title) ? title : name;

        poster_path  = (poster_path) ? CONFIG.IMAGE_SIZE.MEDIUM+poster_path : CONFIG.NO_PHOTO.POSTER;

        job          = (job) ? <strong>{job}</strong>: '';
        vote_average = (vote_average) ?
                        <Rate allowHalf defaultValue={vote_average / 2} tooltips={vote_average} disabled />
                        : '';
        overview     = (overview) ?
                       <p className="content-text">{overview.substring(0,160)+"..."}</p>
                       : '';
        rating       = (rating) ? <div className="movieRating">{rating}</div> : '';
        return (
            <div className="content" onClick={() => this._movieSelected(id)}>
                <div className="content-overlay"></div>
                {rating}
                <img alt={title} className="content-image" src={poster_path} />
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{title}</h3>
                    { job }
                    { vote_average }
                    { overview }
                </div>
            </div>
        )
    }
}

export default withRouter(MovieCard);