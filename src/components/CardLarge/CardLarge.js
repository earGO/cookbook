import React from 'react';

const CardLarge = (props) => {
    const {recipe,onRouteChange} = props;
    return (
        <div >
            <div className="bordered-blue col s12 m12 l12">
                <div className="card large hoverable card-double"
                     onClick={()=>onRouteChange('single',recipe.idMeal)}
                >
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

export default CardLarge