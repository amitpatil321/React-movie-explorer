import React from 'react';
import { Col} from 'antd';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';

import * as CONFIG from '../../config/config';
import { makeUrl } from '../Utils/Utils';

const Cast = (props) => {
    // Destructuring
    let { title, name } = props.movie;

    // Check whether title OR name provided
    title = (title) ? title : name;

    if(props.movie.credits){
        return props.movie.credits.cast.map((person, index) => {
            // Check if photo is null ?
            let pic = CONFIG.NO_PHOTO.PERSON;
            if(person.profile_path)
                pic = "https://image.tmdb.org/t/p/w264_and_h264_bestv2"+person.profile_path;

            return <Col xs={12} lg={3} key={index}>
                <Zoom delay={index * 80}>
                    <Link
                        to={{ pathname : CONFIG.ROUTES.PERSON+person.id+"/"+makeUrl(person.name),
                        state : { movie_name : title, referer : window.location.pathname } }}
                    >
                        <img src={pic} className="actorPic" alt={person.name}
                            onError={(e)=>{e.target.onerror = null; e.target.src=CONFIG.NO_PHOTO.PERSON}} // Show default image in case if it fails loading actual image
                        />
                        <p>
                            <strong>{person.name}</strong><br />
                            <i className="charName">As {person.character}</i>
                        </p>
                    </Link>
                </Zoom>
            </Col>
        }).slice(0, CONFIG.CAST_PER_PAGE); // Showing only limited results;
    }
    return null;
};

export default Cast;