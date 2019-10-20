import {combineReducers} from 'redux';

// 拆分reducer
import {reducer as headerReducer} from './../common/header/store';

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;