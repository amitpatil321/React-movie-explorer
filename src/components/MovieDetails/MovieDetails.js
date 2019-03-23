import React, { Component } from 'react';
import './MovieDetails.css'

class MovieDetails extends Component {
    state = {
        movie : null
    }

    componentDidMount(){
        this.setState({ movie : this.props.location.state.movie });
    }

    componentWillReceiveProps(){
        this.setState({ movie : this.props.history.location.state.movie });
    }

    render() {
        if(this.state.movie){
            console.log(this.state.movie);

            let backgroundImage = "http://image.tmdb.org/t/p/original"+ this.state.movie.backdrop_path;

            document.getElementById("mainContent").style.backgroundImage = 'url("'+backgroundImage+'")';

            return (
                <div className="movieDetails">
                    Movie : {this.state.movie.title}
                    <img src={"http://image.tmdb.org/t/p/w185"+this.state.movie.poster_path} />
                </div>
            );
        }else 
            return (<div>Nothing to display</div>);
    }
}

export default MovieDetails;