import React from 'react';
import './TodoCardButton.scss'

class TodoCardButton extends React.Component {

    render() {
        const { dayID,oneTodo } = this.props
        if(this.props.children==='Completed'){
            return (
                <div className={'todo-button complete'} >
                    {this.props.children}
                </div>

            );
        } else {
            return (
                <div className={'todo-button delete'}>
                    {this.props.children}
                </div>

            );
        }

    };
};

export default TodoCardButton;

/*
* onClick={()=>onMarkTodoCompleted(dayID,oneTodo._id)}
* */