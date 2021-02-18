const initialState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_GENRES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_GENRES_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_GENRES_FAILURE:
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