import React from 'react';
import Ingredient from "../Ingredient/Ingredient";


class RecipeIngredients extends React.Component {

    render() {
        const { ingredients } = this.props;
        if(ingredients){
            return (
                <div>
                    <p>Ingredients</p>
                    {
                        ingredients.map((ingredient,key)=>{
                            return(
                                <Ingredient
                                    key={key}
                                    ingredient={ingredient}
                                />
                            )

                        })
                    }
                </div>

            )
        } else {
            return(
                <h1>Loading ingredients</h1>
            )
        }
    };
};

export default RecipeIngredients;