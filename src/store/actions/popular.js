import ACTIONS from '../constants';

const fetchPopularRequest = () => {
    return {
        type: ACTIONS.FETCH_POPULAR_REQUEST
    }
}

const fetchPopularSuccess = popular => {
    return {
        type: ACTIONS.FETCH_POPULAR_SUCCESS,
        payload: popular
    }
}

const fetchPopularFailure = error => {
    return {
        type: ACTIONS.FETCH_POPULAR_FAILURE,
        payload: error
    }
}