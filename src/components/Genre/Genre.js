import React, { Component } from 'react';
import ListMovies from '../ListMovies/ListMovies';

class Genre extends Component {
    render() {
        // console.log(this.props.match.params.id);
        return (
            <>
                <ListMovies type="genre" id={this.props.match.params.id}/>
            </>  
        );
    }
}

export default Genre;