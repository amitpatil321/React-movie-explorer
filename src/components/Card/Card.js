import React from 'react';
import { Rate } from 'antd';

import './Card.css';
import * as CONFIG from '../../config/config';

const MovieCard = props => {
    let {title, job, rating, desc, poster} = props;
    let moviePoster = (poster) ? CONFIG.IMAGE_SIZE.MEDIUM+poster : CONFIG.NO_PHOTO.POSTER;
    
    return (
        <div className="content">
            <div className="content-overlay"></div>
            <img alt={title} className="content-image" src={moviePoster} />
            <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{title}</h3>
                
                {(job) ? <strong>{job}</strong>: '' }
                
                {(rating) ? 
                <Rate allowHalf defaultValue={rating / 2} tooltips={rating} disabled />
                : '' }

                {(desc) ? 
                <p className="content-text">{desc.substring(0,160)+"..."}</p>
                : '' }    
            </div>
        </div>                
    )
}

export default MovieCard;