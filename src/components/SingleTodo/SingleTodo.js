import React from 'react';

const SingleTodo = () => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1 hoverable">
                    <div className="card-content white-text">
                        <span className="card-title">Single simple task to do</span>
                        <p>I am a very simple task. Like "take fish out of the fridge" task.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default SingleTodo;