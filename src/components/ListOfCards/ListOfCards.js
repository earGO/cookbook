import React from 'react';

import {isCooked} from "../../helpers/arrayFunctions";

const ListOfCards = (props) => {
    if(props.meals) {
        if(props.meals.length){
            console.log(props.meals.find(isCooked))
            return (
                <div>
                    <p>This is a ListOfCards dumb React Component</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>This is a ListOfCards dumb React Component with no Meals</p>
                </div>
            )
        }

    } else {
        return (
            <div>
                <p>Waiting props at :istOfCards</p>
            </div>
        )
    }

};

export default ListOfCards;