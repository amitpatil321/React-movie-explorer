import Axios from '../config/axios';

// Fetch all contacts
export const getPopularMovies = () => {
    return Axios.get("https://api.themoviedb.org/3/trending/all/week").then(response => {
        return response.data;
    })
    .catch((error) => {
        throw new Error("Error fetching contacts!");
    });   
}

// // Add new contact
// export const addNewContact = (data) => {
//     return Axios.post("/contacts", data).then(response => {
//         return response.data;
//     })
//     .catch((error) => {
//         throw new Error("Error saving contact!");
//     });    
// }

// // Delete contact
// export const deleteContact = (id) => {
//     return Axios.delete("/contacts/"+id).then(response => {
//         return response;
//     })
//     .catch((error) => {
//         throw new Error("Error deleting contact!");
//     });    
// }