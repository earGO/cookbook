import React from 'react';
import TodosIntro from "../../components/TodosIntro/TodosIntro";
import TodosMenu from "../../components/TodosMenu/TodosMenu";
import TodoList from "../../components/TodoList/TodoList";
import {connect} from "react-redux";
import { getCurrentTodos,markTodoCompleted } from "./actions";
import '../../styles/global.scss';


const mapStateToProps = (state) =>{
    return {
        todosObject:state.getCurrentTodosReducer.todosObject,
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
        const { todosObject,todosPending,
            onRouteChange } = this.props;
        if(!todosPending){
            const todosArray = todosObject.todos;
            if(todosArray){
                const activeTodos = todosObject.todos.map(todo=>{
                    if(todo.active===true){
                        return todo
                    }
                });
                console.log('list of active todos be like: ',activeTodos)
            }
            return (
                    <div className={'container-flex'}>
                        <TodosIntro/>
                        <TodosMenu/>
                        <TodoList onRouteChange={onRouteChange} todosObject={todosObject} todosPending={todosPending}/>
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