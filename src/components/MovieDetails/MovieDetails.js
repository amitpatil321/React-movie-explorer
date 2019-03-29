import React, { Component } from 'react';
import { Row, Col, Typography, Tag } from 'antd';
import Fade from 'react-reveal/Fade';

import * as API from '../../API/MoviesAPI';
import './MovieDetails.css'

const { Title, Paragraph } = Typography;

class MovieDetails extends Component {
    state = {
        movie : null
    }

    componentDidMount(){
        // We will show whatever we have quickly and then we load more details later
        this.setState({ movie : this.props.location.state.movie });
        // Load other details
        API.movieDetails(this.props.location.state.movie.id).then(response => {
            let details = { ...this.state.movie, ...response };
            console.log(details);

            this.setState({ movie : details });
        });
    }

    componentWillReceiveProps(){
        this.setState({ movie : this.props.history.location.state.movie });
    }

    _getTags(){
        return this.state.movie.genres.map(genre => {
            return <Tag key={genre.id} color={'#'+Math.random().toString(16).substr(-6)}>{genre.name}</Tag>
        });
    }

    render() {
        let tags = "";
        if(this.state.movie && this.state.movie.genres)
            tags = this._getTags();

        if(this.state.movie){
            console.log(this.state.movie);
            let backgroundImage = "http://image.tmdb.org/t/p/original"+ this.state.movie.backdrop_path;
            document.getElementById("mainContent").style.backgroundImage = 'url("'+backgroundImage+'")';
            return (
                    <div className="movieDetails">
                        <Row gutter={16}>
                            <Col span={6}>                    
                                <Fade>
                                    <img src={"http://image.tmdb.org/t/p/w342"+this.state.movie.poster_path} alt={this.state.movie.title} width="294px"/>
                                </Fade>
                            </Col>
                            <Col span={17} offset={1}>
                                <Fade>
                                    <Title className="movieName">{this.state.movie.title}</Title>
                                    <Title level={2} className="movieTagline">{this.state.movie.tagline}</Title>
                                    <Paragraph className="overview">
                                        {this.state.movie.overview}
                                    </Paragraph>
                                    <div>{tags}</div>
                                </Fade>
                            </Col>    
                        </Row>    
                    </div>
            );
        }else 
            return (<div>Nothing to display</div>);
    }
}

export default MovieDetails;