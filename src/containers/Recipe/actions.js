import * as CONSTANTS from "./constants";

export const getOneRecipe = async (mealId,dispatch)=>{
    dispatch({
        type:CONSTANTS.RECIPE_REQUEST_PENDING
    })
    try{
        let url='http://localhost:5010/recipes/'+ mealId;
        console.log(url)
        const promised = await fetch(url);
        const response =  await promised.json();
        const data = await response;
        console.log(data)
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

export const getCurrentRecipe = async (mealId,dispatch)=>{
    dispatch({
        type:CONSTANTS.CURRENT_RECIPE_REQUEST_PENDING
    })
    try{
        let url='http://localhost:5010/recipes/current/'+ mealId;
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