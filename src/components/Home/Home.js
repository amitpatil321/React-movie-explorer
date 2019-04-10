import React, { Component } from 'react';

import ListMovies from '../ListMovies/ListMovies';
import { removeBg } from '../Utils/Utils';

class Home extends Component {
    componentDidMount(){
        // remove background iamge if any applied
        removeBg();
    }

    render() {
        return (
            <>
                <ListMovies type="trending"/>
            </>    
        );
    }
}

export default Home;