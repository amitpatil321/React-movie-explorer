import MoviesAxios from '../config/axios';

import * as CONFIG from '../config/config';

var People = {};

// Get basic profile details
People.profile = (id) => {
    return MoviesAxios.get(CONFIG.API_BASE_URL+"/person/"+id).then(response => {
        return response.data;
    })
    .catch((error) => {
        throw new Error(CONFIG.ERRORS.PROFILE_NOT_FOUND);
    });    
}

export default People;