
import React from 'react';

import './RecipeVideo.scss';
import '../../styles/global.scss';

const RecipeVideo = (props) => {
    console.log(props)
    const videoUrl = props.video+'embed';
    const trueUrl = videoUrl.replace('embed','').replace('watch?v=','embed/')
    console.log(trueUrl)
    return (
        <div className={'video-wrapper'}>
            <iframe id="player" type="text/html"
                className={'video-frame'}
                src={trueUrl} frameBorder="0"
                    title={'recipeStory'}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    )
};

export default RecipeVideo;