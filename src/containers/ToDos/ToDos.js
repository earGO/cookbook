import React from 'react';
import TodosIntro from "../../components/TodosIntro/TodosIntro";
import TodosMenu from "../../components/TodosMenu/TodosMenu";
import TodoList from "../../components/TodoList/TodoList";
import {connect} from "react-redux";
import {getCurrentTodos} from "./actions";


const mapStateToProps = (state) =>{
    return {
        currentTodos:state.getCurrentTodosReducer.currentTodos,
        todosPending:state.getCurrentTodosReducer.todosPending,
        error:state.getCurrentTodosReducer.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestCurrentTodos:(date) => getCurrentTodos(date,dispatch)
    }
};
class ToDos extends React.Component {

    componentDidMount() {
        this.props.onRequestCurrentTodos(this.props.date)
    }

    render() {
        const { currentTodos,todosPending,
            onRouteChange } = this.props;
        if(!todosPending){
            return (
                <div>
                    <TodosIntro/>
                    <TodosMenu/>
                    <TodoList onRouteChange={onRouteChange} currentTodos={currentTodos} todosPending={todosPending}/>
                </div>

            )
        } else {
            return (
                <div>
                    <p>Fetching Todos</p>
                </div>

            )
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDos);