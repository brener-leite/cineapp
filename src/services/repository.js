import api from './api';

export default class Repository {
    getGenres = async () => api.get('/genre/movie/list?api_key=f777c2aabe3a758d785dab898b6d1947&language=en-US');
}