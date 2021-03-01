import ACTIONS from '../constants';

const INITIAL_STATE = {
    loading: false,
    data: [],
    error: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTIONS.FETCH_IMAGES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ACTIONS.FETCH_IMAGES_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case ACTIONS.FETCH_IMAGES_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;