import React from 'react';
import { Col} from 'antd';
import { Fade } from 'react-reveal';

import MovieCard from '../Card/Card';

const Similar = (props) => {
    return props.list.map((movie, index) => {
        return (
            <Col xs={6} lg={6} key={movie.id + Math.random()} id={movie.id} className="moviecard castMovies">
                <Fade delay={index * 30}>
                    <MovieCard movie={movie} />
                </Fade>
            </Col>
        );
    });
};

export default Similar;