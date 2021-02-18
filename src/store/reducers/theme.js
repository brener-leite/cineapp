const initialState = {
    theme: 'dark'
}

const SET_THEME = 'SET_THEME';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_THEME:
            return {
                theme: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;