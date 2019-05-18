import React from 'react';
import { isActive } from '../../helpers/arrayFunctions';

const DashboardTodosCard = (props) => {
    const { todos,onRouteChange } = props;
    const FIRST_TODO = todos.find(isActive);
    return (
        <section className="card small"
                 onClick={()=>onRouteChange('todos')}>
            <div className="card-image">
                <img src=""  alt={''}/>
                <span className="card-title">Todos</span>
            </div>
            <div className="card-content">
                <p><strong>{FIRST_TODO.todo}</strong> and {todos.length-1} other things to do for an evening</p>
            </div>
        </section>

    )
};

export default DashboardTodosCard;