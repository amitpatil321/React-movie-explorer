import React, { Component } from 'react';
import ListMovies from '../ListMovies/ListMovies';

class Home extends Component {
    componentDidMount(){
        // remove background iamge if any applied
        document.getElementById("mainContent").style.backgroundImage = '';
    }

    render() {
        return (
            <>
                <ListMovies title="Trending This Week"/>
                {/* <ListMovies title="Popular"/> */}
            </>    
        );
    }
}

export default Home;