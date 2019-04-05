import React from 'react';
import { Col} from 'antd';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';

import * as CONFIG from '../../config/config';

const Cast = (props) => {
    if(props.movie.cast){
        return props.movie.cast.map((person, index) => {
            // Check if photo is null ?
            let pic = CONFIG.NO_PHOTO.PERSON;
            if(person.profile_path)
                pic = "https://image.tmdb.org/t/p/w264_and_h264_bestv2/"+person.profile_path;
            return <Col xs={12} lg={3} key={index}>
                <Zoom delay={index * 80}>
                    <Link to={CONFIG.ROUTES.PERSON+person.id+"/"+person.name}>
                        <img src={pic} className="actorPic" alt={person.name}/>
                        <p>
                            <strong>{person.name}</strong><br />
                            <i className="charName">As {person.character}</i>
                        </p>
                    </Link>
                </Zoom>        
            </Col>
        }).slice(0, CONFIG.CAST_PER_PAGE); // We need only 8 results;
    }
    return null;
};

export default Cast;