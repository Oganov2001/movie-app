import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = (query) => {
  return axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
};

export const fetchMovieDetail = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
};