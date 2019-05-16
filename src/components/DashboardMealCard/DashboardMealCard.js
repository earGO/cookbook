import React from 'react';

const DashboardMealCard = (props) => {
    const { recipeName,recipeImage } = props.meal;
    return (
        <section className="card small">
            <div className="card-image">
                <img src={recipeImage} alt={''}/>
                <span className="card-title">Breakfast!</span>
            </div>
            <div className="card-content">
                <p>Today's breakfast is <strong>{recipeName}</strong>. Let's start cooking!</p>
            </div>
        </section>

    )
};

export default DashboardMealCard;