import * as CONSTANTS from './constants';

const initialShow = {
    showPage:'login',
    singleId:''
};

export const naviReducer = (state=initialShow,action={})=> {
    switch(action.type){
        case CONSTANTS.SHOW_PAGE:
            return {...state,showPage:action.payload.route,singleId:action.payload.id};
        default:
            return state;
    }
}

const initialUser = {
    user:{},
    userIsPending:false,
    userError: ''
};

export const userReduser = (state=initialUser,action={})=> {
    switch(action.type){
        case CONSTANTS.USER_REQUEST_PENDING:
            return {...state,userIsPending:true};
        case CONSTANTS.USER_REQUEST_SUCCESS:
            return {...state,user:action.payload,userIsPending:false};
        case CONSTANTS.USER_REQUEST_FAILED:
            return {...state,userError:action.payload,userIsPending:false};


        default:
            return state;
    }
}

const initialTodos = {
    todos:['Put fish out of freezer to fridge','Put beans into water','Fill steamer with water','Something else']
};

export const todosReduser = (state=initialTodos,action={})=> {
    switch(action.type){
        case CONSTANTS.TODOS:
            return {...state,todos:action.payload};
        default:
            return state;
    }
}

const initialReminders = {
    reminders:['Go buy some food','Dinner with Robin at 19 p.m. at hers']
};

export const remindersReduser = (state=initialReminders,action={})=> {
    switch(action.type){
        case CONSTANTS.REMINDERS:
            return {...state,reminders:action.payload};
        default:
            return state;
    }
}