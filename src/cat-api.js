import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_4eRXDHqHvjxZxYAqguMB2rPjbOkQpYGKtdlCcmy1C7h2QkNCBaH5n7c57JPMbYuX";

export function fetchBreeds() {
    return axios.get(`https://api.thecatapi.com/v1/breeds`)
   
};

export function fetchCatByBreed(breedId) { 
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
}


// import axios from "axios";

// const BASE_URL = "https://api.thecatapi.com/v1"
// const URL = "https://api.thecatapi.com/v1/breeds";
// const API_KEY = "live_4eRXDHqHvjxZxYAqguMB2rPjbOkQpYGKtdlCcmy1C7h2QkNCBaH5n7c57JPMbYuX";

// axios.defaults.headers.common["x-api-key"] = API_KEY;

// export function fetchBreeds() {
//   return axios.get(URL)
//   .then (response => {
//     if (!response.ok) {
//       throw new Error();
//     }
//     return response.data;
//   })
// }

// export function fetchCatByBreed(breedId) {
//   return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
//   .then(response => response.data)
//   .catch(error => {

//     throw error;
//   })
// }
