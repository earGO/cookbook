import React from 'react';
import './CardDouble.scss';

const CardDouble =  (props) => {
    const {recipe,onRouteChange} = props;
    return (
        <div >
            <div className="bordered-blue col s12 m6 l6">
                <div className="card medium hoverable card-double"
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

export default CardDouble