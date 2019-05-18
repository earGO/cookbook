import * as CONSTANTS from './constants';

const initialDay = {
    actualDay:{},
    dayIsPending:false,
    error: ''
};

export const getActualDayReducer = (state=initialDay,action={})=>{
    switch (action.type) {
        case CONSTANTS.ACTUAL_DAY_PENDING:
            return {...state,dayIsPending:true};
        case CONSTANTS.ACTUAL_DAY_SUCCESS:
            return {...state,actualDay:action.payload,dayIsPending:false};
        case CONSTANTS.ACTUAL_DAY_FAILED:
            return {...state,error:action.payload,dayIsPending:false};
        default:
            return state;
    }
};