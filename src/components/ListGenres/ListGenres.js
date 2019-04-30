import React from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

import * as CONFIG from '../../config/config';
import { makeUrl } from '../Utils/Utils';

const ListGenres = (props) => {

    // Generate random DARK color only
    let randomColor = () => {
        return CONFIG.COLORS[Math.floor(Math.random()*CONFIG.COLORS.length)];
    }

    if(props.movie.genres){
        return props.movie.genres.map(genre => {
            return (
                <Link key={genre.id} to={CONFIG.ROUTES.GENRE+genre.id+"/"+makeUrl(genre.name)}>
                    <Tag key={genre.id} color={randomColor()}>{genre.name}</Tag>
                </Link>
             );
        });
    }
    return null;
};

export default ListGenres;