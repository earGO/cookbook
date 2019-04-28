import * as CONSTANTS from "./constants";

const initialRecipe = {
    recipe:{},
    isPending:false,
    error: ''
}

export const getOneRecipe = (state=initialRecipe,action={})=>{
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
