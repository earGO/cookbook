import React from 'react';

const Featured = ({recipe}) => {
    console.log(recipe)

        if (recipe) {
            return (
                <section className={'featured'}>
                    <div className={'row'}>
                        <div className={'col s6 m6 l6'} id={'featured-picture'}>
                            <img className={'featured'} src={`${recipe.strMealThumb}`} alt={''}/>
                        </div>
                        <div className={'featured valign-wrapper center-align bordered-blue'}>
                            <div className={'col s12 m12 l12 bordered'} id={'featured-text'}>
                                <h3>Some good story title</h3>
                                <h5>Because people like stories</h5>
                                <h5><a>READ MORE</a></h5>
                            </div>

                        </div>
                    </div>
                </section>

            )} else {
            return (
                <div className={'row'}>
                    <div className={'col s6 m6 l6'} id={'featured-picture'}>
                        Loading
                    </div>
                    <div className={'col s6 m6 l6'} id={'featured-text'}></div>
                </div>

            )
        }
}

export default Featured