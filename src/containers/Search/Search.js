import React from 'react';


const initialState = {}


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    componentDidMount() {
        this.setState(initialState)
        console.log(this.state)
    }

    /*a debugging console logging*/
    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <article className={'bordered'}>
                <div className={'row'}>
                    <h3>Find recipes by categorie or ingredient</h3>
                </div>
                <div className={'row'}>
                    <div className={'col s1 m2 l3'}>                </div>
                    <div className={'col s10 m8 l6'}>
                        <input placeholder={'What do you wanna cook? '}/>
                    </div>
                    <div className={'col s1 m2 l3'}>                </div>
                </div>
                <div className={'row'}>
                    <div className={'col s1 m2 l3'}></div>
                    <div className={'col s10 m8 l6'}>
                        placeholder for a narrowers
                    </div>
                    <div className={'col s1 m2 l3'}></div>
                </div>
            </article>
        )
    }
}

export default Search