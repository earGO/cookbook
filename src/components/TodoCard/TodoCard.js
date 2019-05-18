import React from 'react';

/*++++++++++++++ Styles +++++++++++++++++++++*/
import '../../styles/global.scss';
import './TodoCard.scss';
import '../../styles/global.scss';
import TodoCardButton from "./TodoCardButton";

const TodoCard = (props) => {
    const { oneTodo } = props;
    return (
        <segment className="card">
            <div className="">
                <div className="">
                    <div className="">
                        <span className="">Here will be meal-type or smth</span>
                        <p>{oneTodo.todo}</p>
                    </div>
                    <div className="todo-button-container">
                        <TodoCardButton>Some test text</TodoCardButton>
                        <TodoCardButton>Some test text</TodoCardButton>
                    </div>
                </div>
            </div>
        </segment>

    )
};

export default TodoCard;