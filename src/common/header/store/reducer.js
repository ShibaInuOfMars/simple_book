import * as actionTypes from './actionTypes';

// Immutable一旦创建就不能被修改
import {fromJS} from 'immutable';

// 通过fromJS方法将一个普通的js对象包装成immutable对象
const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {

    if(action.type === actionTypes.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值，以及现在要设置的值，返回一个全新的对象
        return state.set('focused', true);
    }

    if(action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false);
    }

    return state;
};