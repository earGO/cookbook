import React from 'react';

import {connect} from "react-redux";
import { getOneRecipe } from "./actions";

import RecipeMenu from "../../components/RecipeMenu/RecipeMenu";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import Utensils from "../../components/Utensils/Utensils";
import NutritionStats from "../../components/NutritionStats/NutritionStats";
import Steps from "../../components/Steps/Steps";
import RecipeDifficulty from "../../components/RecipeDifficulty/RecipeDifficulty";
import RecipeVideo from "../../components/RecipeVideo/RecipeVideo";
import RecipeIngredients from "../../components/RecipeIngredients/RecipeIngredients";
import RecipeUtensils from "../../components/RecipeUtensils";
import RecipeNutritionStats from "../../components/RecipeNutritionStats/RecipeNutritionStats";
import RecipeSteps from "../../components/RecipeSteps/RecipeSteps";


const mapStateToProps = (state) =>{
    return {
        singleRecipe:state.getOneRecipe.singleRecipe,
        singleRecipePending:state.getOneRecipe.singleRecipePending,
        singleRecipeError:state.getOneRecipe.singleRecipeError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestRecipe:(mealId) => getOneRecipe(mealId,dispatch)
    }
};

class Recipe extends React.Component {

    componentDidMount() {
        console.log('Recipe component sees recipe ID as ',this.props.mealId)
        this.props.onRequestRecipe(this.props.mealId)
    }

    render() {
        const recipe = this.props.singleRecipe;
        const singleRecipePending = this.props.singleRecipePending;
        if(!singleRecipePending){
            console.log('rendering recipe\n',recipe)
            return (
                    <div>
                        <RecipeVideo video={recipe.video} image={recipe.image}/>
                        <RecipeMenu/>
                        <RecipeInfo name={recipe.mealName} cousine={recipe.area} category={recipe.category}/>
                        <RecipeDifficulty/>
                        <RecipeIngredients ingredients={recipe.ingredients}/>
                        <RecipeUtensils/>
                        <RecipeNutritionStats/>
                        <RecipeSteps steps={recipe.steps}/>
                    </div>
                )
            } else {
            return (
                <h1>Loading Recipe</h1>
            )
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe);