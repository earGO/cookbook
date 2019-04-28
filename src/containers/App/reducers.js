import * as CONSTANTS from './constants';

const initialRecipes = {
    recipes:[],
    isPending:false,
    error: ''
}

export const getRecipes = (state=initialRecipes,action={})=>{
    switch (action.type) {
        case CONSTANTS.RECIPE_REQUEST_PENDING:
            return {...state,isPending:true}
        case CONSTANTS.RECIPE_REQUEST_SUCCESS:
            return {...state,recipes:action.payload,isPending:false}
        case CONSTANTS.RECIPE_REQUEST_FAILED:
            return {...state,error:action.payload,isPending:false}
        default:
            return state
    }
}

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
    user:{
        userName:'Barney',
        userId:'mr.Awesome'
    }
};

export const userReduser = (state=initialUser,action={})=> {
    switch(action.type){
        case CONSTANTS.USER:
            return {...state,user:action.payload};
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