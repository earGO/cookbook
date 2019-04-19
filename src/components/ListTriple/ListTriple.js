import React from 'react';
import CardSmall from "../CardSmall/CardSmall";

const ListTriple =  ({recipes}) => {
        return (
            <div className="row bordered">
                <div className={'col s12 m12 l12 xl12'}>
                    <h4 className={'flow-text'}>Latest recipes<span className={'see-all-text'}><a href={'/'} className={'see-all-text'}>See all</a></span></h4>

                </div>
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8 bordered">
                    {
                        recipes.map((recipe, key) => {
                            if(key<3){
                                return (
                                    <CardSmall
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


export default ListTriple