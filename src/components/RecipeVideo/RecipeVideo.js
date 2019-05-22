
import React from 'react';

const RecipeVideo = (props) => {
    console.log(props)
    const videoUrl = props.video+'embed';
    const trueUrl = videoUrl.replace('embed','').replace('watch?v=','embed/')
    console.log(trueUrl)
    return (
        <div>
            <iframe width="560" height="315" src={trueUrl} frameBorder="0"
                    title={'recipeStory'}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )
};

export default RecipeVideo;