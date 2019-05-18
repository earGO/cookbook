import React from 'react';

const RecipeInfo = ({name,cousine,category}) => {
    return (
        <div>
            <p>This is a RecipeInfo dumb React Component</p>
            <p>We gonna cook {name}, how cool is that?!</p>
            <p>It's {cousine}, and it's {category}</p>
        </div>

    )
};

export default RecipeInfo;