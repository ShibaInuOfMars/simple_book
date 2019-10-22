import {fromJS} from 'immutable';

import {actionTypes} from './index';

const defaultState = fromJS({
    topicList: [],

    articleList: [] ,

    articleListPage: 1,

    recommendList: [],

    writerList: [],

    showBackTopBtn: false
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

    if(action.type === actionTypes.SET_ARTICLE_LIST) {
        return state.merge({
            articleList: state.get('articleList').concat(action.articleList),
            articleListPage: action.nextPage
        });
    }

    if(action.type === actionTypes.SHOW_BACK_TOP_BTN) {
        return state.merge({
            showBackTopBtn: action.state
        });
    }

    return state;
};