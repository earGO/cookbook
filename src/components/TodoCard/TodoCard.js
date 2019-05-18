import React from 'react';

/*++++++++++++++ Styles +++++++++++++++++++++*/
import '../../styles/global.scss';
import './TodoCard.scss';
import '../../styles/global.scss';

const TodoCard = (props) => {
    const { oneTodo } = props;
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1 hoverable">
                    <div className="card-content white-text">
                        <span className="card-title">Here will be meal-type or smth</span>
                        <p>{oneTodo.todo}</p>
                    </div>
                    <div className="card-action">
                        <p className={'todo-action-button'} >Mark copleted</p>
                        <a href="#">Delete</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default TodoCard;