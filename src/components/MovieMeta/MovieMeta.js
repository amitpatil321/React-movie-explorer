import React from 'react';
import { Row, Col, Icon } from 'antd';
import CountUp from 'react-countup';
import { Flip } from 'react-reveal';

import './MovieMeta.css';

const MovieMeta = (props) => {

    return (
        <>
            <Row className="movieMeta">
                <Col xs={12} lg={8}>
                    <p>Original Release</p>    
                    <Flip top cascade>
                        <span>
                            {(props.movie.release_date) ? 
                                props.movie.release_date : 'NA'
                            }
                        </span>
                    </Flip>    
                </Col>
                <Col xs={12} lg={8}>
                    <p>Running Time</p>
                    <span>
                        {(props.movie.runtime) ? 
                            <CountUp end={props.movie.runtime} delay={1} separator="," suffix=" mins" />
                         : 'NA'   
                        }
                    </span>
                </Col>
                <Col xs={12} lg={8}>
                    <p>Budget</p>
                    <span>
                        {(props.movie.budget) ? 
                            <CountUp end={props.movie.budget} delay={1} separator="," prefix="$" /> : 'NA' }
                    </span>
                </Col>
            {/* </Row> */}
            {/* <Row className="movieMeta"> */}
                <Col xs={12} lg={8}>
                    <p>Box Office</p>
                    <span>
                        {(props.movie.revenue) ? 
                            <CountUp end={props.movie.revenue} delay={1} separator="," prefix="$" /> : 'NA' }
                    </span>
                </Col>
                <Col xs={12} lg={8}>
                    <p>Vote Average</p>
                    <span>
                        {(props.movie.vote_average) ? 
                            <CountUp end={props.movie.vote_average} delay={1} decimals={1} suffix=" / 10" duration={3} />
                            : 'NA'
                        }
                    </span>
                </Col>
                <Col xs={12} lg={8}>
                    <p>Website</p>
                    <span>
                        {(props.movie.homepage) ? 
                            <a href={props.movie.homepage} target="_blank"><Icon type="global" /></a> : 'NA'
                        }
                    </span>
                </Col>                
            </Row>            
        </>    
    )
}

export default MovieMeta;