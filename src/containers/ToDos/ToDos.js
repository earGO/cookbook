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
        onRequestCurrentTodos:(date) => getCurrentTodos(date,dispatch),
        onMarkTodoCompleted:(dayID,todoId) => markTodoCompleted(dayID,todoId,dispatch)
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
            const todosArray = todosObject.todos;
            if(todosArray){
                const activeTodos = todosObject.todos.filter(todo=>{
                    if(todo.active===true){
                        return todo
                    }
                });
                console.log('list of active todos be like: ',activeTodos)
                const NEW_TODOS_OBJECT = {
                    dayID: todosObject.dayID,
                    todos:activeTodos
                };
                console.log(NEW_TODOS_OBJECT);
                return (
                    <div className={'container-flex'}>
                        <TodosIntro/>
                        <TodosMenu/>
                        <TodoList onRouteChange={onRouteChange} todosObject={NEW_TODOS_OBJECT} todosPending={todosPending} onMarkTodoCompleted={onMarkTodoCompleted}/>
                    </div>

                )
            } else {
                return (
                   <div className={'container-flex'}>
                       <TodosIntro/>
                       <TodosMenu/>
                       <p>Waiting for TodoList</p>
                   </div>

               )
            }


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