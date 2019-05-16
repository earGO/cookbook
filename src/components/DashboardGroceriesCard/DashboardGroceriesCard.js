import React from 'react';

const DashboardGroceriesCard = (props) => {
    const {groceries} = props;
    return (
        <section className="card small">
            <div className="card-image">
                <img src=""  alt={''}/>
                <span className="card-title">Grocerie list</span>
            </div>
            <div className="card-content">
                <h5>It's groceries day!!</h5>
                <p><strong>{groceries[0].name}</strong> and {groceries.length-1} other things to buy today!</p>
            </div>
        </section>

    )
};

export default DashboardGroceriesCard;