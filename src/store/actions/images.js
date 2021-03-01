import ACTIONS from '../constants';
import Repository from '../../services/repository';

export const fetchImages = movieId => {
    const api = new Repository();

    return dispatch => {
        dispatch(fetchImagesRequest());

        api.getMovieImages(movieId)
            .then(data => dispatch(fetchImagesSuccess(data)))
            .catch(error => dispatch(fetchImagesFailure(error)))
    }
}

const fetchImagesRequest = () => {
    return {
        type: ACTIONS.FETCH_IMAGES_REQUEST
    }
}

const fetchImagesSuccess = genres => {
    return {
        type: ACTIONS.FETCH_IMAGES_SUCCESS,
        payload: genres
    }
}

const fetchImagesFailure = error => {
    return {
        type: ACTIONS.FETCH_IMAGES_FAILURE,
        payload: error
    }
}