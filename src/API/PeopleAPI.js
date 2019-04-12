import MoviesAxios from '../config/axios';

import * as CONFIG from '../config/config';

var People = {};

// Get basic profile details
People.profile = (id) => {
    return MoviesAxios.get(CONFIG.API_BASE_URL+"/person/"+id+"?append_to_response=movie_credits,external_ids,images").then(response => {
        return response.data;
    })
    .catch((error) => {
        throw new Error(CONFIG.ERRORS.PROFILE_NOT_FOUND);
    });    
}

export default People;