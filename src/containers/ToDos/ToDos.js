import React from 'react';
import TodosIntro from "../../components/TodosIntro/TodosIntro";
import TodosMenu from "../../components/TodosMenu/TodosMenu";
import TodoList from "../../components/TodoList/TodoList";
import {connect} from "react-redux";
import { getCurrentTodos,markTodoCompleted } from "./actions";
import {markTodoReducer} from "./reducers";
import '../../styles/global.scss';


const mapStateToProps = (state) =>{
    return {
        todosObject:state.getCurrentTodosReducer.todosObject,
        todosPending:state.getCurrentTodosReducer.todosPending,
        error:state.getCurrentTodosReducer.error,
        markTodosPending:state.markTodoReducer.markTodosPending
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestCurrentTodos:(date) => getCurrentTodos(date,dispatch),
        onMarkTodoCompleted:(dayId,todoId) => markTodoCompleted(dayId,todoId,dispatch)
    }
};
class ToDos extends React.Component {

    componentDidMount() {
        this.props.onRequestCurrentTodos(this.props.date)
    }

    render() {
        const { todosObject,todosPending,
            onRouteChange,onMarkTodoCompleted } = this.props;
        if(!todosPending){
            return (
                <div className={'container-flex'}>
                    <TodosIntro/>
                    <TodosMenu/>
                    <TodoList onRouteChange={onRouteChange} todosObject={todosObject} todosPending={todosPending} onMarkTodoCompleted={onMarkTodoCompleted}/>
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