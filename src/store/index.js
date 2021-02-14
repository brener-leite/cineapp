import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    popularMovies: function(state, action) {
        return [
            {'name': 'brilho eterno'},
            {'name': 'gladiador'}
        ];
    },
    theme: function(state, action) {
        switch(action.type) {
            case 'THEME_CHANGE':
                return action.payload;
            default:
                if(state) {
                    return state;
                }
                else {
                    return 'dark';
                }
        }
    }
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;