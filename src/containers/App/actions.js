import * as CONSTANTS from './constants';

import * as keys from '../../config/keys';

const
    BACKEND_URI = keys.BACKEND_URI;

export const naviAction = (route,id) => ({
    type:CONSTANTS.SHOW_PAGE,
    payload:{route:route,id:id}
});


export const getUser = async (dispatch) => {
    dispatch({
        type:CONSTANTS.USER_REQUEST_PENDING
    });
    try{
        const promised = await fetch(BACKEND_URI+'auth');
        const response =  promised.json();
        const userData =  await response;
        dispatch({
            type:CONSTANTS.USER_REQUEST_SUCCESS,
            payload: userData
        })
    } catch (error) {
        dispatch({
            type:CONSTANTS.USER_REQUEST_FAILED,
            payload: error
        })
    }
};

export const todosAction = (todos) => ({
    type:CONSTANTS.TODOS,
    payload:todos
});

export const remindersAction = (reminders) => ({
    type:CONSTANTS.TODOS,
    payload:reminders
});


