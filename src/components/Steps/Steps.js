import React from 'react';
import Step from "../Step/Step";

const Steps = ({steps}) => {
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

export default Steps;