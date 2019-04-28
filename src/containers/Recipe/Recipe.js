import React from 'react';
import {connect} from "react-redux";
import {getOneRecipe} from "./actions";


const mapStateToProps = (state) =>{
    return {
        recipe:state.getOneRecipe.recipe,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestRecipe:(mealId) => getOneRecipe(mealId,dispatch)
    }
};

class Recipe extends React.Component {

    componentDidMount() {
        this.props.onRequestRecipe(this.props.mealId)
    }

    render() {
        const {recipe} = this.props;
        console.log(this.props)
        return (
            <div>
                <p>The Recipe smart component</p>
                <p>Gonna cook the <strong>food</strong></p>
            </div>

        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe);