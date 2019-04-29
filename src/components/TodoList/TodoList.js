import React from 'react';
import SingleTodo from "../SingleTodo/SingleTodo";
import FancyTodo from "../FancyTodo/FancyTodo";

const TodoList = () => {
    return (
        <div className={'container row'}>
            <SingleTodo/>
            <SingleTodo/>
            <FancyTodo/>
        </div>

    )
};

export default TodoList;