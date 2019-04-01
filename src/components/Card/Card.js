import React from 'react';
import { Card, Rate } from 'antd';

import './Card.css';
const { Meta } = Card;

const MovieCard = props => {
    // return (<Card
    //     hoverable
    //     bordered
    //     style={{ width: 240 }}
    //     cover={<img alt={props.title} src={ "http://image.tmdb.org/t/p/w342/"+props.poster } />}
    //     className="eachcard"
    // >
    //     <Meta
    //         title       = {props.title}
    //         description = {<Rate allowHalf defaultValue={props.rating / 2} tooltips={props.rating} disabled />}  
    //     />              
    // </Card>);   

    return (
        <div className="content">
            <div className="content-overlay"></div>
            <img alt={props.title} className="content-image" src={"http://image.tmdb.org/t/p/w342/"+props.poster} />
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