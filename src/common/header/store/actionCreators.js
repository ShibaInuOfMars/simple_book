import * as actionTypes from './actionTypes';

import {fromJS} from 'immutable';

import axios from 'axios';

// 搜索框获得焦点
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

// 搜索框失去焦点
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

// 鼠标进入热门搜索框
export const mouseInSearch = () => ({
    type: actionTypes.MOUSE_IN_SEARCH
});

// 鼠标离开热门搜索框
export const mouseLeaveSearch = () => ({
    type: actionTypes.MOUSE_LEAVE_SEARCH
});

// 换一批
export const listSwitch = (page) => ({
    type: actionTypes.LIST_SWITCH,
    page
});

// 设置热门搜索列表数据
const setPopularSearchList = (data) => ({
    type: actionTypes.POPULAR_SEARCH_LIST,
    data: fromJS(data), // 将普通的js对象转成immutable对象
    totalPage: Math.ceil(data.length / 10) // 获取总页数
});

// 异步获取热门搜索列表数据
export const getPopularSearchList = () => {
    return async (dispatch) => {
        let res = await axios.get('/api/popularSearchList.json');
        let data = res.data;
        if(data.success_code === 200) {
            dispatch(setPopularSearchList(data.result));
        }
    };
};