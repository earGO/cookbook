import React from 'react';
import CardLarge from "../CardLarge/CardLarge";

const ListOne = ({recipes}) => {
    console.log(Math.random())
    return (
        <div className="row bordered">
            <div className={'col s12 m12 l12 xl12'}>
                <h4 className={'flow-text'}>Random recipe to go right now</h4>

            </div>
            <div className="col s1 m2 l2"></div>
            <div className="col s10 m8 l8 bordered">
                {
                    recipes.map((recipe, key) => {
                        if(key===1){
                            return (
                                <CardLarge
                                    key={key}
                                    recipe={recipe}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className="col s1 m2 l2"></div>
        </div>

    )
}

export default ListOne