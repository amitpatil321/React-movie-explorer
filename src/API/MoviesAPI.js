import MoviesAxios from '../config/axios';
import Axios from 'axios';

import * as CONFIG from '../config/config';

// Fetch all contacts
export const getPopularMovies = () => {
    return MoviesAxios.get("https://api.themoviedb.org/3/trending/all/week").then(response => {
        return response.data;
    })
    .catch((error) => {
        throw new Error("Error fetching movies!");
    });
}

export const searchMovies = (string) => {
    return Axios.get("https://api.themoviedb.org/3/search/movie?api_key="+CONFIG.API_KEY+"&query="+string).then(response => {
        return response.data;
    })
    .catch((error) => {
        throw new Error("Error fetching movies!");
    });   
}

export const movieDetails = (movieId) => {
    return Axios.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+CONFIG.API_KEY).then(response => {
        return response.data;
    })
    .catch((error) => {
        throw new Error("Error fetching movie details");
    });   
}