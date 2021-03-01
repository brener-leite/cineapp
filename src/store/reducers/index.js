import { combineReducers } from 'redux';

import popular from './popular';
import genres from './genres';
import images from './images';

export default combineReducers({
    popular,
    genres,
    images
});