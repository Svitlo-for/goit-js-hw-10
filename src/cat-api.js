import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1"
const URL = "https://api.thecatapi.com/v1/breeds";
const API_KEY = "live_4eRXDHqHvjxZxYAqguMB2rPjbOkQpYGKtdlCcmy1C7h2QkNCBaH5n7c57JPMbYuX";

axios.defaults.headers.common["x-api-key"] = API_KEY;

export function fetchBreeds() {
  return axios.get(URL)
  .then (response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.data;
  })
}