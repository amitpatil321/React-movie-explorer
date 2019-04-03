import React from 'react';
import { Tag } from 'antd';
import * as CONFIG from '../../config/config';

const Tags = (props) => {

    // Generate random DARK color only
    let randomColor = () => {
        return CONFIG.COLORS[Math.floor(Math.random()*CONFIG.COLORS.length)];
    }

    if(props.movie.genres){
        return props.movie.genres.map(genre => {
            return <Tag key={genre.id} color={randomColor()}>{genre.name}</Tag>
        });         
    }
    return null;
};

export default Tags;