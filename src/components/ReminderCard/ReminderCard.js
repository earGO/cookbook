import React from 'react';

const ReminderCard = () => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1 hoverable">
                    <div className="card-content white-text">
                        <span className="card-title">Reminder card</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#" className={'hoverable'}>Mark completed</a>
                        <a href="#" className={'hoverable'}>Postpond</a>
                        <a href="#" className={'hoverable'}>Delete</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default ReminderCard;