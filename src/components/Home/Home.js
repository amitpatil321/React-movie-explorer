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
            <div className="mainContent" id="mainContent">
                <ListMovies type="trending"/>
            </div>
        );
    }
}

export default Home;