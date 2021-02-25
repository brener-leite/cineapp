import { combineReducers } from 'redux';

import popular from './popular';
import genres from './genres';

export default combineReducers({
    popular,
    genres
});