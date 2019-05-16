import * as CONSTANTS from "./constants";

import * as keys from '../../config/keys';

const
    BACKEND_URI = keys.BACKEND_URI;

export const getOneRecipe = async (mealId,dispatch)=>{
    dispatch({
        type:CONSTANTS.RECIPE_REQUEST_PENDING
    })
    try{
        let url=BACKEND_URI + mealId;
        const promised = await fetch(url);
        const response =  await Promise.resolve(promised);
        const data = await response;
        const recipe = data;
        dispatch({
            type:CONSTANTS.RECIPE_REQUEST_SUCCESS,
            payload: recipe
        })
    } catch (error) {
        dispatch({
            type:CONSTANTS.RECIPE_REQUEST_FAILED,
            payload: error
        })
    }
}

export const getCurrentRecipe = async (mealId,backendUrl,dispatch)=>{
    dispatch({
        type:CONSTANTS.CURRENT_RECIPE_REQUEST_PENDING
    })
    try{
        let url=backendUrl+ mealId;
        console.log(url)
        const promised = await fetch(url);
        const response =  await promised.json();
        const data = await response;
        console.log(data)
        const recipe = data[0];
        dispatch({
            type:CONSTANTS.CURRENT_RECIPE_REQUEST_SUCCESS,
            payload: recipe
        })
    } catch (error) {
        dispatch({
            type:CONSTANTS.CURRENT_RECIPE_REQUEST_FAILED,
            payload: error
        })
    }
}