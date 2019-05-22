import * as CONSTANTS from './constants';

const initialDay = {
    todosObject:{},
    todosPending:false,
    error: ''
};

export const getCurrentTodosReducer = (state=initialDay,action={})=>{
    switch (action.type) {
        case CONSTANTS.ALL_TODOS_REQUEST_PENDING:
            return {...state,todosPending:true};
        case CONSTANTS.ALL_TODOS_REQUEST_SUCCESS:
            return {...state,todosObject:action.payload,todosPending:false};
        case CONSTANTS.ALL_TODOS_REQUEST_FAILED:
            return {...state,error:action.payload,todosPending:false};
        default:
            return state;
    }
};
