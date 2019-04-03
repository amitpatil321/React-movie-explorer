import React from 'react';
import { Col, Tooltip } from 'antd';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

import * as CONFIG from '../../config/config';

const ProdCompanies = (props) => {
    if(props.movie.production_companies){
        let company,pic;
        return props.movie.production_companies.map((company, index) => {
            pic = CONFIG.NO_LOGO_PHOTO;
            if(company.logo_path)
                pic = "https://image.tmdb.org/t/p/w264_and_h264_bestv2/"+company.logo_path;        

            return (
                <Col xs={6} lg={3} key={index}>
                    <Zoom delay={index * 80}>
                        <Tooltip placement="bottom" title={company.name}>
                            <Link to={CONFIG.PRODUCTION_COMPANY+company.id+"/"+company.name}>
                                <img src={pic} alt={company.name} width={50}/>
                                {/* <p>{company.name}</p> */}
                            </Link>
                        </Tooltip>
                    </Zoom>        
                </Col>
            );          
        }).slice(0, CONFIG.COMPANIES_PER_PAGE); // We need only 8 results;        
    }
    return null;
};

export default ProdCompanies;