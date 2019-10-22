import {fromJS} from 'immutable';

import {actionTypes} from './index';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    if(action.type === actionTypes.CHANGE_DETAIL) {
        return state.merge({
            title: action.title,
            content: action.content
        });
    }

    return state;
};