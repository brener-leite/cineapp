const FETCH_POPULAR_REQUEST = 'FETCH_POPULAR_REQUEST';
const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';
const FETCH_POPULAR_FAILURE = 'FETCH_POPULAR_FAILURE';

const fetchPopularRequest = () => {
    return {
        type: FETCH_POPULAR_REQUEST
    }
}

const fetchPopularSuccess = popular => {
    return {
        type: FETCH_POPULAR_SUCCESS,
        payload: popular
    }
}

const fetchPopularFailure = error => {
    return {
        type: FETCH_POPULAR_FAILURE,
        payload: error
    }
}