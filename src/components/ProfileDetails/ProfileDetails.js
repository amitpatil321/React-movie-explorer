import React from 'react';
import { Row, Col, Typography, Tabs, Icon, Empty } from 'antd';
import { Fade } from 'react-reveal';
import ShowMoreText from 'react-show-more-text';

import './ProfileDetails.css';
import * as CONFIG from '../../config/config';
import { getAge } from '../Utils/Utils';
import MovieCard from '../Card/Card';

const { Title, Paragraph } = Typography;
const TabPane = Tabs.TabPane;

const ProfileDetails = props => {

    return (
        <>
            <Row gutter={24} className="personProfile">
                <BasicInfo profile={props.profile} />
            </Row>
            <Row gutter={24} className="personProfile">
                <OtherInfo profile={props.profile} />
            </Row>
        </>    
    )
}

const BasicInfo = (props) => {
    let { name, profile_path, biography, birthday, known_for_department, place_of_birth, gender } = props.profile;

    const genderIcon = (gender) ? <li><Icon type={(gender == "1") ? "woman" : "man" } /></li> : '';
    const bdate      = (birthday) ? <li>{getAge(birthday)} Years</li> : '';
    const dept       = (known_for_department) ? <li>{known_for_department}</li> : '';
    const birthplace = (place_of_birth) ? 
                        <li>
                            <Icon type   = "environment" />&nbsp;
                            <a href      = {"https://www.google.com/maps/place/"+place_of_birth} target="_blank">
                                {place_of_birth}
                            </a>     
                        </li> : '';

    // Check if poster image availabe
    profile_path = (profile_path) ? 
    CONFIG.IMAGE_SIZE.MEDIUM+profile_path : CONFIG.NO_PHOTO.PERSON;

    return (
        <>
         <Col xs={24} lg={4}>                  
             <Fade>
                <div style={{ backgroundImage : `url(${profile_path})` }} className="personProfilePic" >
                </div>
             </Fade>
         </Col>
         <Col lg={20}>
             <Title level={4}>
                {name}
             </Title>
             <ul className="personMeta">
                {genderIcon}
                {bdate}
                {dept}
                {birthplace}
             </ul>
             <Paragraph className="overview">
                <ShowMoreText
                    lines={3}
                    more='Show more'
                    less='Show less'
                >
                    {biography}
                </ShowMoreText>             
             </Paragraph>                           
         </Col>
        </> 
    );        
}

const OtherInfo = (props) => {
    const cast = (props.profile.movie_credits.cast) ? 
    <CastCrew list={props.profile.movie_credits.cast} /> : '';
    const crew = (props.profile.movie_credits.crew) ? 
    <CastCrew list={props.profile.movie_credits.crew} /> : '';

    return (
        <Col xs={{span:24, offset : 0}} lg={24} offset={1}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Photos" key="1">Photos</TabPane>
                <TabPane tab="Cast" key="2">
                    {cast}    
                </TabPane>
                <TabPane tab="Crew" key="3">
                    {crew}    
                </TabPane>
            </Tabs>
        </Col>
    );    
}

const CastCrew = (props) => {
    if(props.list.length){
        return props.list.map((movie, index) => {
            let { id, title, name, poster_path, vote_average, overview, job } = movie;
            // Check if title is undefined
            let movie_name = (title) ? title : name;   
            
            return (
                <Col xs={6} lg={4} key={id} id={id} className="moviecard castMovies">
                    <Fade delay={index * 30}>
                        <MovieCard 
                            key    = {id} 
                            title  = {movie_name} 
                            poster = {poster_path} 
                            rating = {vote_average} 
                            desc   = {overview}
                            job    = {job} 
                        />
                    </Fade>    
                </Col>
            );    
        });
    }else{
        return <Empty description={CONFIG.ERRORS.NOTHING_TO_SHOW}></Empty>;
    }
}

export default ProfileDetails;