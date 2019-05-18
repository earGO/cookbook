import * as CONSTANTS from './constants';

const initialDay = {
    todosObject:{},
    todosPending:false,
    markTodosPending:false,
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

export const markTodoReducer = (state=initialDay,action={})=>{
    switch (action.type) {
        case CONSTANTS.MARK_TODO_REQUEST_PENDING:
            return {...state,markTodosPending:true};
        case CONSTANTS.ALL_TODOS_REQUEST_SUCCESS:
            return {...state,todosObject:action.payload,markTodosPending:false};
        case CONSTANTS.ALL_TODOS_REQUEST_FAILED:
            return {...state,error:action.payload,markTodosPending:false};
        default:
            return state;
    }
};