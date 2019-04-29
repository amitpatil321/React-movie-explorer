import React, {useState, lazy, Suspense} from 'react';
import { Row, Col, Typography, Tabs, Icon, Spin, Empty, Pagination } from 'antd';
import { Fade } from 'react-reveal';
import 'react-lightbox-component/build/css/index.css'
import ShowMoreText from 'react-show-more-text';

import './ProfileDetails.css';
import * as CONFIG from '../../config/config';
import { getAge } from '../Utils/Utils';
import MovieCard from '../Card/Card';


const Gallery = lazy(() => import('../Gallery/Gallery'));

const { Title, Paragraph } = Typography;
const TabPane = Tabs.TabPane;
const antIcon = <Icon type="loading" spin />;

const ProfileDetails = props => {
    if(props.profile){
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
    return <Empty description={CONFIG.ERRORS.NO_DATA_FOUND}></Empty>
}

const BasicInfo = (props) => {
    let { name, profile_path, biography, birthday, known_for_department, place_of_birth, gender } = props.profile;

    const genderIcon = (gender) ? <li><Icon type={(gender === "1") ? "woman" : "man" } /></li> : '';
    const bdate      = (birthday) ? <li>{getAge(birthday)} Years</li> : '';
    const dept       = (known_for_department) ? <li>{known_for_department}</li> : '';
    const birthplace = (place_of_birth) ?
                        <li>
                            <Icon type = "environment" />&nbsp;
                            <a href={"https://www.google.com/maps/place/" + place_of_birth} target="_blank" rel="noopener noreferrer">
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
    let [currPage, changePage] = useState(1);

    const pics = <Suspense fallback={antIcon}>
                    <Gallery list={props.profile.images.profiles} currentPage={currPage} />
                 </Suspense>
    const cast = <CastCrew list={props.profile.movie_credits.cast} currentPage={currPage} />
    const crew = <CastCrew list={props.profile.movie_credits.crew} currentPage={currPage} />

    const totalPics = props.profile.images.profiles.length;
    const totalCast = props.profile.movie_credits.cast.length;
    const totalCrew = props.profile.movie_credits.crew.length;

    return (
        <Col xs={{span:24, offset : 0}} lg={24} offset={1}>
            {/* Reset current page to 1 with tabChange */}
            <Tabs defaultActiveKey="1" onChange={()=>changePage(1)}>
                <TabPane tab={"Photos ("+totalPics+")"} key="1" >
                    {(totalPics > CONFIG.META_ITEMS_PERPAGE)  ?
                        <Pagination current={currPage} total={totalPics} pageSize={CONFIG.META_ITEMS_PERPAGE} onChange={(page)=>changePage(page)} /> : ''}
                    {pics}
                </TabPane>
                <TabPane tab={"Cast ("+totalCast+")"} key="2" style={{ textAlign : "center" }}>
                    {(totalCast > CONFIG.META_ITEMS_PERPAGE) ?
                        <Pagination current={currPage} total={totalCast} pageSize={CONFIG.META_ITEMS_PERPAGE} onChange={(page)=>changePage(page)} /> : '' }
                    {cast}
                </TabPane>
                <TabPane tab={"Crew ("+totalCrew+")"} key="3">
                    {(totalCrew > CONFIG.META_ITEMS_PERPAGE) ?
                    <Pagination current={currPage} total={totalCrew} pageSize={CONFIG.META_ITEMS_PERPAGE} onChange={(page)=>changePage(page)} /> : '' }
                    {crew}
                </TabPane>
            </Tabs>
        </Col>
    );
}

const CastCrew = (props) => {

    if(props.list.length){
        const indexOfLastItem = props.currentPage * CONFIG.META_ITEMS_PERPAGE;
        const indexOfFirstItem = indexOfLastItem - CONFIG.META_ITEMS_PERPAGE;
        const currentList = props.list.slice(indexOfFirstItem, indexOfLastItem);

        return currentList.map((movie, index) => {
            return (
                <Col xs={6} lg={4} key={movie.id+Math.random()} id={movie.id} className="moviecard castMovies">
                    <Fade delay={index * 30}>
                        <MovieCard movie={movie} />
                    </Fade>
                </Col>
            );
        })
    }else
        return <Empty description={CONFIG.ERRORS.NOTHING_TO_SHOW}></Empty>;
}

export default React.memo(ProfileDetails);