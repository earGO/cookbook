import * as CONSTANTS from "./constants";

export const getOneRecipe = async (mealId,dispatch)=>{
    dispatch({
        type:CONSTANTS.RECIPE_REQUEST_PENDING
    })
    try{
        let url='https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ mealId;
        const promised = await fetch(url);
        const response =  await promised.json();
        const data = await response;
        const recipe = data.meals[0];

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