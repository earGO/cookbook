import React from 'react';
import './CardSmall.scss';

const CardSmall = ({recipe}) => {
    console.log(recipe)
    return (
        <div >
            <div className="bordered-blue col s12 m6 l4">
                <div className="card small hoverable card-small-grow">
                    <div className="card-image">
                        <img src={`${recipe.strMealThumb}`} alt={'foodpic'}/>
                            <span className="card-title"></span>
                    </div>
                    <div className="card-content">
                        <p className={'card-text'}>{recipe.strMeal}</p>
                    </div>
                </div>
            </div>
        </div>


)
}

export default CardSmall