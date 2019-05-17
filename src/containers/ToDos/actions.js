import * as CONSTANTS from './constants';
import {urlConstructor} from '../../helpers/urlConstructor';

import * as keys from '../../config/keys';

const
    BACKEND_URI = keys.BACKEND_URI;

export const getCurrentTodos = async (date,dispatch) => {
    dispatch({
        type: CONSTANTS.ALL_TODOS_REQUEST_PENDING,
    });
    try {
        const fetchDate = Date.parse(date)
        const url = urlConstructor(BACKEND_URI,'todos/',fetchDate);
        console.log('in actions for Todos component fetching day at URL: ',url);
        const promised = fetch(url);
        const response = await Promise.resolve(promised);
        const data = await response.json();
        const todos = data;
        dispatch({
            type: CONSTANTS.ALL_TODOS_REQUEST_SUCCESS,
            payload: todos
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.ALL_TODOS_REQUEST_FAILED,
            payload: error
        })
    }
};