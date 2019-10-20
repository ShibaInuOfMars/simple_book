import * as actionTypes from './actionTypes';

// Immutable一旦创建就不能被修改
import {fromJS} from 'immutable';

// 通过fromJS方法将一个普通的js对象包装成immutable对象
const defaultState = fromJS({
    focused: false,
    popularSearchList: [] // 注意：整个对象是经过fromJS包装后的immutable对象，所以该数组也是一个immutable对象，所以不能赋值为普通的js对象，必须同样是immutable对象才能赋值
});

export default (state = defaultState, action) => {

    // 搜索框获得焦点
    if(action.type === actionTypes.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值，以及现在要设置的值，返回一个全新的对象
        return state.set('focused', true);
    }

    // 搜索框失去焦点
    if(action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false);
    }

    // 设置热门搜索数据
    if(action.type === actionTypes.POPULAR_SEARCH_LIST) {
        return state.set('popularSearchList', action.data);
    }

    return state;
};