import axios from 'axios';

import {actionTypes} from './index';
import { fromJS } from 'immutable';

const setHomeData = (topicList, articleList, recommendList, writerList) => ({
    type: actionTypes.SET_HOME_DATA,
    topicList,
    articleList,
    recommendList,
    writerList
});

const setArticleList = (articleList, nextPage) => ({
    type: actionTypes.SET_ARTICLE_LIST,
    articleList: fromJS(articleList),
    nextPage
});

export const asyncGetHomeData = () => {
    return async (dispatch) => {
        let res = await axios.get('/api/homeData.json');
        let data = res.data;
        if(data.success_code === 200) {
            dispatch(setHomeData(data.result.topicList, data.result.articleList, data.result.recommendList, data.result.writerList));
        }
    }
}

export const asyncAddArticle = (page) => {
    return async (dispatch) => {
        let res = await axios.get('/api/addArticle.json?page=' + page);
        let data = res.data;
        if(data.success_code === 200) {
            dispatch(setArticleList(data.result, page + 1));
        }
    }
}

export const showBackTopBtn = (state) => ({
    type: actionTypes.SHOW_BACK_TOP_BTN,
    state
});