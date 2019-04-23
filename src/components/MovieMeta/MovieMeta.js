import React from 'react';
import { Row, Col, Icon } from 'antd';
import CountUp from 'react-countup';
import { Flip } from 'react-reveal';
import { map } from 'lodash';

import './MovieMeta.css';

const MovieMeta = (props) => {
    let { release_date, runtime, budget, revenue, vote_average, spoken_languages } = props.movie;

    release_date     = (release_date) ? release_date : 'NA';
    runtime          = (runtime) ? <CountUp end={runtime} delay={1} separator ="," suffix=" mins" /> : 'NA';
    budget           = (budget) ? <CountUp end={budget} delay={1} separator= "," prefix="$" /> : 'NA';
    revenue          = (revenue) ? <CountUp end={revenue} delay={1} separator="," prefix="$" /> : 'NA';
    vote_average     = (vote_average) ? <CountUp end={vote_average} delay={1} decimals={1} suffix=" / 10" duration={3} /> : 'NA';
    spoken_languages = (spoken_languages) ? map(spoken_languages, 'name').join(", ") : '';

    return (
        <>
            <Row className="movieMeta">
                <Col xs={12} lg={8}>
                    <p>Original Release</p>
                    <Flip top cascade>
                        <span>
                            {release_date}
                        </span>
                    </Flip>
                </Col>
                <Col xs={12} lg={8}>
                    <p>Running Time</p>
                    <span>
                        {runtime}
                    </span>
                </Col>
                <Col xs={12} lg={8}>
                    <p>Budget</p>
                    <span>
                        {budget}
                    </span>
                </Col>
            {/* </Row> */}
            {/* <Row className="movieMeta"> */}
                <Col xs={12} lg={8}>
                    <p>Box Office</p>
                    <span>
                        {revenue}
                    </span>
                </Col>
                <Col xs={12} lg={8}>
                    <p>Vote Average</p>
                    <span>
                        {vote_average}
                    </span>
                </Col>
                <Col xs={12} lg={8}>
                    <p>Languages</p>
                    <span>
                        {spoken_languages}
                    </span>
                </Col>
            </Row>
        </>
    )
}

export default MovieMeta;