const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

export const fetchGenresRequest = () => {
    return {
        type: FETCH_GENRES_REQUEST
    }
}

export const fetchGenresSuccess = genres => {
    return {
        type: FETCH_GENRES_SUCCESS,
        payload: genres
    }
}

export const fetchGenresFailure = error => {
    return {
        type: FETCH_GENRES_FAILURE,
        payload: error
    }
}