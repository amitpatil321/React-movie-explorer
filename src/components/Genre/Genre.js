import React, { Component } from 'react';
import ListMovies from '../ListMovies/ListMovies';

class Genre extends Component {
    render() {
        // console.log(this.props.match.params.id);
        return (
            <div className="mainContent" id="mainContent">
                <ListMovies type="genre" id={this.props.match.params.id}/>
            </div>
        );
    }
}

export default Genre;