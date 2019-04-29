import * as CONSTANTS from './constants';

export const getRecipes = async (dispatch) => {
    dispatch({
        type:CONSTANTS.RECIPE_REQUEST_PENDING
    });
    try{
        const promised = await fetch('http://localhost:5010/recipes/all');
        const response =  promised.json();
        const recipeData =  await response;
        dispatch({
            type:CONSTANTS.RECIPE_REQUEST_SUCCESS,
            payload: recipeData
        })
    } catch (error) {
        dispatch({
            type:CONSTANTS.RECIPE_REQUEST_FAILED,
            payload: error
        })
    }
};

export const naviAction = (route,id) => ({
    type:CONSTANTS.SHOW_PAGE,
    payload:{route:route,id:id}
})


export const getUser = async (dispatch) => {
    dispatch({
        type:CONSTANTS.USER_REQUEST_PENDING
    });
    try{
        const promised = await fetch('http://localhost:5010/auth');
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
})

export const remindersAction = (reminders) => ({
    type:CONSTANTS.TODOS,
    payload:reminders
})


