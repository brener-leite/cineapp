import ACTIONS from '../constants';
import Repository from '../../services/repository';

export const fetchPopular = () => {
    const api = new Repository();

    return dispatch => {
        dispatch(fetchPopularRequest());

        api.getPopular()
            .then(({ data: { results } }) => dispatch(fetchPopularSuccess(results)))
            .catch(error => dispatch(fetchPopularFailure(error)))
    }
}

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