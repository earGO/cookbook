import React from 'react';
import FancyTodo from "../FancyTodo/FancyTodo";
import TodoCard from "../TodoCard/TodoCard";

import '../../styles/global.scss';
import './TodoList.scss';

const TodoList = (props) => {
    const { todosObject,todosPending, ...other } = props;
    if(todosObject){
        const { dayID,todos } = todosObject;
        if(!todosPending&&todos) {
            if (todos.length) {
                console.log('TodoList sees todos as: ', todos)
                return (
                    <div className={'container-flex todolist-container'}>
                        {
                            todos.map((oneTodo, key) => {
                                return (
                                    <TodoCard
                                        key={key}
                                        oneTodo={oneTodo}
                                        dayID={dayID}
                                        {...other}
                                    />
                                )
                            })
                        }
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
    } else {
        return (
            <div className={'container row'}>
                <h5>ToDo list - error recieveing props</h5>
            </div>
        )
    }


};

export default TodoList;