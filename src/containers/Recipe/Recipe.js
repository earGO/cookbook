import React from 'react';

import {connect} from "react-redux";
import { getOneRecipe } from "./actions";

import VideoRecipe from "../../components/VideoRecipe/VideoRecipe";
import RecipeMenu from "../../components/RecipeMenu/RecipeMenu";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import Difficulty from "../../components/Difficulty/Difficulty";
import Ingredients from "../../components/Ingredients/Ingredients";
import Utensils from "../../components/Utensils/Utensils";
import NutritionStats from "../../components/NutritionStats/NutritionStats";
import Steps from "../../components/Steps/Steps";


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
                        <VideoRecipe video={recipe.video} image={recipe.image}/>
                        <RecipeMenu/>
                        <RecipeInfo name={recipe.mealName} cousine={recipe.area} category={recipe.category}/>
                        <Difficulty/>
                        <Ingredients ingredients={recipe.ingredients}/>
                        <Utensils/>
                        <NutritionStats/>
                        <Steps steps={recipe.steps}/>
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