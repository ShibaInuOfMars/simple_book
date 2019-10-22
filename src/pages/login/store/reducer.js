import {fromJS} from 'immutable';

import {actionTypes} from './index';

const defaultState = fromJS({
    loginState: false
});

export default (state = defaultState, action) => {
    if(action.type === actionTypes.CHANGE_LOGIN) {
        return state.set('loginState', action.state);
    }

    if(action.type === actionTypes.LOGOUT) {
        return state.set('loginState', action.state);
    }
    
    return state;
};