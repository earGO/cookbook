import React from 'react';

/*++++++++++++++ Styles +++++++++++++++++++++*/
import '../../styles/global.scss';
import './TodoCard.scss';
import '../../styles/global.scss';
import TodoCardButton from "./TodoCardButton";


const TodoCard = (props) => {
    const { oneTodo } = props;
    return (
        <div className="card">
                    <div className="">
                        <span className="">Here will be meal-type or smth</span>
                        <p>{oneTodo.todo}</p>
                    </div>
                    <div className="todo-button-container">
                        <TodoCardButton {...props}>Completed</TodoCardButton>
                        <TodoCardButton>Delete</TodoCardButton>
                    </div>
        </div>

    )
};

export default TodoCard;