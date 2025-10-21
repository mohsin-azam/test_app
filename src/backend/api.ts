import axios from 'axios';
import { Movie, MovieCategory } from '~utils/globalProps';

const API_CLIENT = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGQ2YTAxYWU3NzAwZTRjNDM4MTQxZWM5ZDgyMmU1NCIsIm5iZiI6MTc2MDk4MzYyOC43OTgsInN1YiI6IjY4ZjY3YTRjNzllMDdhODkyMTEwMjAxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.laowDrJjWh4tp84An_ZCB4nSlIdKHR-mAl4famF1-Sg`,
  },
});

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await API_CLIENT.get('movie/upcoming', {
    params: { language: 'en-US', page: 1 },
  });
  return response.data.results;
};

export const getMovieCategories = async (): Promise<MovieCategory[]> => {
  const response = await API_CLIENT.get('genre/movie/list', {
    params: { language: 'en-US' },
  });
  return response.data.genres;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) return [];
  const response = await API_CLIENT.get('search/movie', {
    params: { query, language: 'en-US', page: 1 },
  });
  return response.data.results;
};
