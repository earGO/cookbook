import * as CONSTANTS from "./constants";

const initialRecipe = {
    singleRecipe:{},
    singleRecipePending:false,
    singleRecipeError: ''
}

export const getOneRecipe = (state=initialRecipe,action={})=>{
    switch (action.type) {
        case CONSTANTS.RECIPE_REQUEST_PENDING:
            return {...state,singleRecipePending:true}
        case CONSTANTS.RECIPE_REQUEST_SUCCESS:
            return {...state,singleRecipe:action.payload,singleRecipePending:false}
        case CONSTANTS.RECIPE_REQUEST_FAILED:
            return {...state,singleRecipeError:action.payload,singleRecipePending:false}
        default:
            return state
    }
}
