import React from 'react';


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
                <p>The Reminders smart component</p>
            </div>

        )
    }
}

export default Reminders