import axios from 'axios';

import {actionTypes} from './index';

const setHomeData = (topicList, articleList, recommendList, writerList) => ({
    type: actionTypes.SET_HOME_DATA,
    topicList,
    articleList,
    recommendList,
    writerList
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