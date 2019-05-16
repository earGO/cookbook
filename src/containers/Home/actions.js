import * as CONSTANTS from './constants';
import {urlConstructor} from '../../helpers/urlConstructor';

export const getActualDay = async (date,backendUrl,dispatch) => {
    dispatch({
        type: CONSTANTS.ACTUAL_DAY_PENDING,
    });
    try {
        const promised = await fetch(urlConstructor(backendUrl,'dashboard'),date);
        const response = promised.json();
        const data = await response;
        dispatch({
            type: CONSTANTS.ACTUAL_DAY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.ACTUAL_DAY_FAILED,
            payload: error
        })
    }
};