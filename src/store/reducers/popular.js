const initialState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_POPULAR_REQUEST = 'FETCH_POPULAR_REQUEST';
const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';
const FETCH_POPULAR_FAILURE = 'FETCH_POPULAR_FAILURE';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POPULAR_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_POPULAR_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_POPULAR_FAILURE:
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