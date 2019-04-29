import React from 'react';
import ReminderList from "../../components/ReminderList/ReminderList";
import ReminderMenu from "../../components/ReminderMenu/ReminderMenu";
import ReminderIntro from "../../components/ReminderIntro/ReminderIntro";


const initialState = {}


class Reminders extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    componentDidMount() {
        this.setState(initialState)
        console.log(this.state)
    }

    /*a debugging console logging*/
    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <ReminderIntro/>
                <ReminderMenu/>
                <ReminderList/>
            </div>

        )
    }
}

export default Reminders