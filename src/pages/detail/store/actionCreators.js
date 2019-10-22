import axios from 'axios';

import {actionTypes} from './index';

const changDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
});

export const getDetail = (id) => {
    return async (dispatch) => {
        let res = await axios.get('/api/detail.json?id=' + id);
        let data = res.data;

        if(data.success_code === 200) {
            dispatch(changDetail(data.result.title, data.result.content))
        }
    };
}