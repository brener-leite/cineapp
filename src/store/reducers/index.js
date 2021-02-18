import { combineReducers } from 'redux';

import popular from './popular';
import genres from './genres';
import theme from './theme';

export default combineReducers({
    popular,
    genres,
    theme
});