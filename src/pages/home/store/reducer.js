import {fromJS} from 'immutable';

import {actionTypes} from './index';

const defaultState = fromJS({
    topicList: [],

    articleList: [] ,

    recommendList: [],

    writerList: []
});

export default (state = defaultState, action) => {

    if(action.type === actionTypes.SET_HOME_DATA) {
        return state.merge({
            // 注意：普通js对象类型的一定要转成immutable类型
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList),
            writerList: fromJS(action.writerList)
        });
    }

    return state;
};