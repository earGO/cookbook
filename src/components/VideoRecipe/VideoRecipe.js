import React from 'react';

const VideoRecipe = ({video}) => {
    const videoUrl = video+'embed';
    const trueUrl = videoUrl.replace('embed','').replace('watch?v=','embed/')
    return (
        <div>
            <iframe width="560" height="315" src={trueUrl} frameBorder="0"
                    title={'recipeStory'}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )
}

export default VideoRecipe;