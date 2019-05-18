import React from 'react';
import './TodoCardButton.scss'

class TodoCardButton extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className={'todo-button'}>
                {this.props.children}
            </div>

        );
    };
};

export default TodoCardButton;