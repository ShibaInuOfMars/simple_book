import axios from 'axios';

import {actionTypes} from './index';

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    state: true
});


export const logout = () => ({
    type: actionTypes.LOGOUT,
    state: false
})

export const login = (account, password) => {
    return async (dispatch) => {
        let res = await axios.get('/api/login.json?account=' + account + '&password=' + password);
        let data = res.data;

        if(data.success_code === 200) {
            dispatch(changeLogin());
        }
    };
}