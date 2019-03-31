import React from 'react';
import { Card, Rate } from 'antd';

import './Card.css';
const { Meta } = Card;

const MovieCard = props => {
    return (<Card
        hoverable
        bordered
        style={{ width: 240 }}
        cover={<img alt={props.title} src={ "http://image.tmdb.org/t/p/w342/"+props.poster } />}
        className="eachcard"
    >
        <Meta
            title       = {props.title}
            description = {<Rate allowHalf defaultValue={props.rating / 2} tooltips={props.rating} disabled />}  
        />              
    </Card>);   
}

export default MovieCard;