import * as CONSTANTS from "./constants";

import * as keys from '../../config/keys';

const
    BACKEND_URI = keys.BACKEND_URI;

export const getOneRecipe = async (mealId,dispatch)=>{
    dispatch({
        type:CONSTANTS.RECIPE_REQUEST_PENDING
    })
    try{
        let url=BACKEND_URI +'recipes/'+ mealId;
        const promised = await fetch(url);
        const response =  await Promise.resolve(promised);
        const data = await response.json();
        const recipe = data;
        console.log('action getOneREcipe fetchet this:\n',recipe)
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
};