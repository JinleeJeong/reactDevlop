import {combineReducers} from 'redux';
import counter from './counter';
import waiting from './waiting';

// 다수의 Reducers
export default combineReducers({
    counter,
    waiting
});

