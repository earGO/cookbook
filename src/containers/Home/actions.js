import * as CONSTANTS from './constants';
import {urlConstructor} from '../../helpers/urlConstructor';

import * as keys from '../../config/keys';

const
    BACKEND_URI = keys.BACKEND_URI;

export const getActualDay = async (date,dispatch) => {
    dispatch({
        type: CONSTANTS.ACTUAL_DAY_PENDING,
    });
    try {
        const fetchDate = Date.parse(date)
        const url = urlConstructor(BACKEND_URI,'dashboard/',fetchDate);
        const promised = fetch(url);
        const response = await Promise.resolve(promised);
        const data = await response.json();
        const day = data;
        dispatch({
            type: CONSTANTS.ACTUAL_DAY_SUCCESS,
            payload: day
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.ACTUAL_DAY_FAILED,
            payload: error
        })
    }
};