import React from 'react';


const initialState = {};


class RecipeNutritionStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    };

    componentDidMount() {
        this.setState(initialState)
        console.log(this.state)
    };

    /*a debugging console logging*/
    componentDidUpdate() {
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <p>The RecipeNutritionStats smart component</p>
            </div>

        );
    };
};

export default RecipeNutritionStats;