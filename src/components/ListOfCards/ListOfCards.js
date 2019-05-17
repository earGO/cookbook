import React from 'react';

import {isCooked,isActive} from "../../helpers/arrayFunctions";
import DashboardCardWrapper from "../DashboardCardWrapper/DashboardCardWrapper";
import DashboardMealCard from "../DashboardMealCard/DashboardMealCard";
import DashboardTodosCard from "../DashboardTodosCard/DashboardTodosCard";
import DashboardGroceriesCard from "../DashboardGroceriesCard/DashboardGroceriesCard";

const ListOfCards = (props) => {
    const{ onRouteChange } = props;
    if(props.meals&&props.todos) {
        if(props.meals.length){
            const MEAL = props.meals.find(isCooked);
            const TODOS = props.todos;
            console.log('todos array in ListOfCards component:\n',props.todos)
            if(props.groceryDay){
                const GROCERIES = props.groceries;
                return (
                    <section>
                        <DashboardCardWrapper>
                            <DashboardMealCard meal={MEAL} onRouteChange={onRouteChange}/>
                        </DashboardCardWrapper>
                        <DashboardCardWrapper>
                            <DashboardTodosCard todos={TODOS}/>
                        </DashboardCardWrapper>
                        <DashboardCardWrapper>
                            <DashboardGroceriesCard groceries={GROCERIES}/>
                        </DashboardCardWrapper>
                    </section>
                )
            } else {
                return (
                    <section>
                        <DashboardCardWrapper>
                            <DashboardMealCard meal={MEAL}/>
                        </DashboardCardWrapper>
                        <DashboardCardWrapper>
                            <DashboardTodosCard todos={TODOS}/>
                        </DashboardCardWrapper>
                    </section>
                )
            }

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