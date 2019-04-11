import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Fade } from 'react-reveal';

import * as CONFIG from '../../config/config';
const { Title, Paragraph, profile_path } = Typography;

const ProfileDetails = props => {
    let { name, biography, profile_path } = props.profile;
    // Check if poster image availabe
    profile_path = (profile_path) ? 
    CONFIG.IMAGE_SIZE.MEDIUM+profile_path : CONFIG.NO_PHOTO.PERSON;

    return (
        <Row gutter={16}>
            <Col xs={24} lg={7} className="moviePoster">                  
                <Fade>
                    <img src={profile_path} alt={name} width="294px"/>
                </Fade>
            </Col>
            <Col xs={{span:24, offset : 0}} lg={16} offset={1}>
                <Fade>
                    <Title className="movieName">
                        {name}
                    </Title>
                    {/* <Title level={2} className="movieTagline">{tagline}</Title> */}
                    <Paragraph className="overview">
                        {biography}
                    </Paragraph>
                </Fade>
            </Col>
        </Row>               
    )
}

export default ProfileDetails;