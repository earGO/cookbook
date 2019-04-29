import React from 'react';
import TodosIntro from "../../components/TodosIntro/TodosIntro";
import TodosMenu from "../../components/TodosMenu/TodosMenu";
import TodoList from "../../components/TodoList/TodoList";


const initialState = {}


class ToDos extends React.Component {
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
                <p>The ToDos smart component</p>
                <TodosIntro/>
                <TodosMenu/>
                <TodoList/>
            </div>

        )
    }
}

export default ToDos