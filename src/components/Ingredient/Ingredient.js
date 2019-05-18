import React from 'react';

const Ingredient = ({ingredient}) => {
    return (
        <div>
            <p>{ingredient.name} - {ingredient.measure}</p>
        </div>

    )
};

export default Ingredient;