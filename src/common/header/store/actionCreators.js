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

// 设置热门搜索列表数据
const setPopularSearchList = (data) => ({
    type: actionTypes.POPULAR_SEARCH_LIST,
    data: fromJS(data) // 将普通的js对象转成immutable对象
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