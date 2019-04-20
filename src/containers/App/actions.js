import * as CONSTANTS from './constants';

export const getRecipes = async (dispatch)=>{
    dispatch({
        type:CONSTANTS.RECIPE_REQUEST_PENDING
    })
    try{
        let urls=[];
        for(let i=0;i<8;i++){
            urls.push('https://www.themealdb.com/api/json/v1/1/random.php')
        }
        const arrayOfPromises = urls.map(async url=>{
            const response=await fetch(url);
            return response.json();
        })
        const recipes = await Promise.all(arrayOfPromises)
        const recipeData = recipes.map(recipe=>{
            return recipe.meals[0]
        })
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
}


