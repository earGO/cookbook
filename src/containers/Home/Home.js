import React from 'react';

import {connect} from "react-redux";
import { getActualDay } from "./actions";

const mapStateToProps = (state) =>{
    return {
        actualDay:state.getActualDayReducer.actualDay,
        dayIsPending:state.getActualDayReducer.dayIsPending,
        error:state.getActualDayReducer.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestActualDay:(date,backendUrl) => getActualDay(date,backendUrl,dispatch)
    }
};



class Home extends React.Component {

    componentDidMount() {
        this.props.onRequestActualDay(this.props.date,this.props.BACKEND_URI)
    }

    render() {
        console.log('date in Home component be like ',this.props.date)
        console.log(this.props)
        const {user} = this.props;
        return (
            <section className={'container row bordered center-align'}>
                <div className="col s1 m2 l2"></div>
                <article className={'col s10 m8 l8 bordered'}>
                    <p>Hello, {user.name}! Let's start your day!</p>

                </article>
                <div className="col s1 m2 l2"></div>
            </section>

        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);