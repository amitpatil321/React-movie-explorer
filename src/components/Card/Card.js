import React from 'react';
import { Rate } from 'antd';

import './Card.css';
import * as CONFIG from '../../config/config';

const MovieCard = props => {
    return (
        <div className="content">
            <div className="content-overlay"></div>
            <img alt={props.title} className="content-image" src={CONFIG.IMAGE_SIZE.MEDIUM+props.poster} />
            <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{props.title}</h3>
                
                {(props.rating) ? 
                <Rate allowHalf defaultValue={props.rating / 2} tooltips={props.rating} disabled />
                : '' }

                {(props.desc) ? 
                <p className="content-text">{props.desc.substring(0,160)+"..."}</p>
                : '' }    
            </div>
        </div>                
    )
}

export default MovieCard;