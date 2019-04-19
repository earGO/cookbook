import React from 'react';
import CardDouble from "../CardDouble/CardDouble";

const ListDouble = ({recipes}) => {
    return (
        <div className="row bordered">
            <div className={'col s12 m12 l12 xl12'}>
                <h4 className={'flow-text'}>Diner for the week</h4>

            </div>
            <div className="col s1 m2 l2"></div>
            <div className="col s10 m8 l8 bordered">
                {
                    recipes.map((recipe, key) => {
                        if(key<2){
                            return (
                                <CardDouble
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

export default ListDouble