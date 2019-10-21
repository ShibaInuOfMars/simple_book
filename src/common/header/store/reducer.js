import * as actionTypes from './actionTypes';

// Immutable一旦创建就不能被修改
import {fromJS} from 'immutable';

// 通过fromJS方法将一个普通的js对象包装成immutable对象
const defaultState = fromJS({
    // 搜索框是否获得焦点
    focused: false,
    // 鼠标是否进入热门搜索框
    mouseInSearch: false,
    // 热门搜索关键词
    popularSearchList: [], // 注意：整个对象是经过fromJS包装后的immutable对象，所以该数组也是一个immutable对象，所以不能赋值为普通的js对象，必须同样是immutable对象才能赋值
    // 当前页码
    page: 1,
    // 总页数
    totalPage: 1
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
        // return state.set('popularSearchList', action.data).set('totalPage', action.totalPage); // 等同于下面一句
        return state.merge({
            popularSearchList: action.data,
            totalPage: action.totalPage
        });
    }

    // 鼠标进入热门搜索框
    if(action.type === actionTypes.MOUSE_IN_SEARCH) {
        return state.set('mouseInSearch', true);
    }

    // 鼠标离开热门搜索框
    if(action.type === actionTypes.MOUSE_LEAVE_SEARCH) {
        return state.set('mouseInSearch', false);
    }

    // 换一批
    if(action.type === actionTypes.LIST_SWITCH) {
        return state.set('page', action.page);
    }

    return state;
};