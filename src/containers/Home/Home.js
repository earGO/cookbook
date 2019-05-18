import React from 'react';

import {connect} from "react-redux";
import { getActualDay } from "./actions";
import DashboardCards from "../../components/DashboardCards/DashboardCards";


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
        this.props.onRequestActualDay(this.props.date);
    }

    render() {
        const {user,date,
                onRouteChange,actualDay,dayIsPending} = this.props;
        if(!dayIsPending){
            const MEALS = actualDay.meals;
            const TODOS = actualDay.todos;
            const ID = actualDay._id;
            const GROCERIES = actualDay.groceries;
            const GROCERIEDAY = actualDay.groceryDay;
            return (
                <section className={'container row bordered center-align'}>
                    <div className="col s1 m2 l2"></div>
                    <article className={'col s10 m8 l8 bordered'}>
                        <p>Hello, {user.name}! Let's start your day!</p>
                        <DashboardCards meals={MEALS} todos={TODOS} groceryDay={GROCERIEDAY} groceries={GROCERIES} onRouteChange={onRouteChange}/>
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