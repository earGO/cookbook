import React from 'react';
import Step from "../Step/Step";


class RecipeSteps extends React.Component {

    render() {
        const {steps} = this.props
        if(steps){
            return (
                <div>
                    <p>Steps:</p>
                    {
                        steps.map((step,key)=>{
                            return (
                                <Step
                                    key={key}
                                    step={step}
                                />
                            )
                        })
                    }
                </div>

            )
        } else {
            return(
                <h3>Loading steps...</h3>
            )
        }
    };
};

export default RecipeSteps;