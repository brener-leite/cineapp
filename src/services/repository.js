import api from './api';

export default class Repository {
    getGenres = async() => api.get('/genre/movie/list');
    getPopular = async() => api.get('/movie/popular');
    getMovieImages = async(movieId) => api.get(`/movie/${movieId}/images`);
}