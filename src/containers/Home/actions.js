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
        console.log('in actions for Home component fetching day at URL: ',url);
        const promised = fetch(url);
        console.log(promised);
        const response = await Promise.resolve(promised);
        const data = await response.json();
        console.log(data)
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