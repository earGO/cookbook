import React from 'react';

const FancyTodo = () => {
    return (
        <div className="col l8 s12 m7">
            <div className="card horizontal hoverable">
                <div className="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6" alt={''}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <span className="card-title">Fancy task for something big</span>
                        <p>I am a fancy event to do. Like "buy candles for a banquette"</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default FancyTodo;