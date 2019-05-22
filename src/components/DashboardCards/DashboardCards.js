import React from 'react';

import {isCooked } from "../../helpers/arrayFunctions";
import DashboardCardWrapper from "../DashboardCardWrapper/DashboardCardWrapper";
import DashboardMealCard from "../DashboardMealCard/DashboardMealCard";
import DashboardTodosCard from "../DashboardTodosCard/DashboardTodosCard";
import DashboardGroceriesCard from "../DashboardGroceriesCard/DashboardGroceriesCard";

const DashboardCards = (props) => {
    const{ meals,todos,groceryDay,groceries, ...other } = props;
    if(meals&&todos) {
        if(meals.length){
            const MEAL = meals.find(isCooked);
            const TODOS = todos;
            if(groceryDay){
                const GROCERIES = groceries;
                return (
                    <section>
                        <DashboardCardWrapper>
                            <DashboardMealCard meal={MEAL} {...other}/>
                        </DashboardCardWrapper>
                        <DashboardCardWrapper>
                            <DashboardTodosCard todos={TODOS} {...other}/>
                        </DashboardCardWrapper>
                        <DashboardCardWrapper>
                            <DashboardGroceriesCard groceries={GROCERIES} {...other}/>
                        </DashboardCardWrapper>
                    </section>
                )
            } else {
                return (
                    <section>
                        <DashboardCardWrapper>
                            <DashboardMealCard meal={MEAL} {...other}/>
                        </DashboardCardWrapper>
                        <DashboardCardWrapper>
                            <DashboardTodosCard todos={TODOS} {...other}/>
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

export default DashboardCards;