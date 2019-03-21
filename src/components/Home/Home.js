import React, { Component } from 'react';
import ListMovies from '../ListMovies/ListMovies';

class Home extends Component {
    render() {
        return (
            <>
                <ListMovies title="Trending This Week"/>
                <ListMovies title="Popular"/>
            </>    
        );
    }
}

export default Home;