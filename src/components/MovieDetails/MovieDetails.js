import React, { Component } from 'react';

class MovieDetails extends Component {
    state = {
        movieId : null
    }

    componentWillReceiveProps(){
        this.setState({ movieId : this.props.location.state });
    }

    render() {
        console.log(this.state.movieId);
        return (
            <div>
                
            </div>
        );
    }
}

export default MovieDetails;