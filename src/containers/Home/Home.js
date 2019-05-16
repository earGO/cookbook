import React from 'react';

import {connect} from "react-redux";
import { getActualDay } from "./actions";
import ListOfCards from "../../components/ListOfCards/ListOfCards";

import { isCooked } from "../../helpers/arrayFunctions";

const mapStateToProps = (state) =>{
    return {
        actualDay:state.getActualDayReducer.actualDay,
        dayIsPending:state.getActualDayReducer.dayIsPending,
        error:state.getActualDayReducer.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestActualDay:(date) => getActualDay(date,dispatch)
    }
};

class Home extends React.Component {

    componentDidMount() {
        console.log('home component sees today date as',this.props.date)
        this.props.onRequestActualDay(this.props.date);
    }

    render() {
        const {user} = this.props;
        const actualDay = this.props.actualDay;
        const dayIsPending = this.props.dayIsPending;
        if(!dayIsPending){
            const MEALS = actualDay.meals;
            const TODOS = actualDay.todos;
            const GROCERIES = actualDay.groceries;
            const GROCERIEDAY = actualDay.groceryDay;
            return (
                <section className={'container row bordered center-align'}>
                    <div className="col s1 m2 l2"></div>
                    <article className={'col s10 m8 l8 bordered'}>
                        <p>Hello, {user.name}! Let's start your day!</p>
                        <ListOfCards meals={MEALS} todos={TODOS} groceryDay={GROCERIEDAY} groceries={GROCERIES}/>
                    </article>
                    <div className="col s1 m2 l2"></div>
                </section>

            )
        } else {
            return (
                <h1>Loading your day</h1>
            )
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);