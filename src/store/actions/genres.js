import ACTIONS from '../constants';
import Repository from '../../services/repository';

export const fetchGenres = () => {
    const api = new Repository();

    return dispatch => {
        dispatch(fetchGenresRequest());

        api.getGenres()
            .then(({ data: { genres } }) => dispatch(fetchGenresSuccess(genres)))
            .catch(error => dispatch(fetchGenresFailure(error)))

    }

}

const fetchGenresRequest = () => {
    return {
        type: ACTIONS.FETCH_GENRES_REQUEST
    }
}

const fetchGenresSuccess = genres => {
    return {
        type: ACTIONS.FETCH_GENRES_SUCCESS,
        payload: genres
    }
}

const fetchGenresFailure = error => {
    return {
        type: ACTIONS.FETCH_GENRES_FAILURE,
        payload: error
    }
}