import React from 'react';
import SingleTodo from "../SingleTodo/SingleTodo";
import FancyTodo from "../FancyTodo/FancyTodo";

const TodoList = (props) => {
    const { onRouteChange,currentTodos,todosPending } = props;
    if(!todosPending){
        if(currentTodos.length){
            console.log('Todolist components ees todos array as: \n',currentTodos);
            return (
                <div className={'container row'}>
                    <SingleTodo/>
                    <SingleTodo/>
                    <FancyTodo/>
                </div>

            )
        } else {
            return (
                <div className={'container row'}>
                    <h5>No Todos for today!</h5>
                </div>
            )
        }
    } else {
        return (
            <div className={'container row'}>
                <h5>Fetching Todos</h5>
            </div>
        )
    }

};

export default TodoList;