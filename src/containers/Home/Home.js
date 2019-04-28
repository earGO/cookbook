import React from 'react';
import SuggestionCard from "../../components/SuggestionCard/SuggestionCard";


const initialState = {
    typesOfCards:['meal','todos','reminders'],
}



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    render() {
        const {user,recipe,todos,reminders,...other} = this.props;
        const {typesOfCards} = this.state;
        return (
            <section className={'container row bordered center-align'}>
                <div className="col s1 m2 l2"></div>
                <article className={'col s10 m8 l8 bordered'}>
                    <p>Hello, {user.userName}! Let's start your day!</p>
                    {
                        typesOfCards.map((card,key)=>{
                            if(card === 'meal'){
                                return (<SuggestionCard
                                    key={key}
                                    info={recipe}
                                    card={card}
                                    {...other}
                                />)
                            } else if (card === 'todos') {
                                return(<SuggestionCard
                                        key={key}
                                        info={todos}
                                        card={card}
                                        {...other}
                                />)
                            } else {
                                return(<SuggestionCard
                                    key={key}
                                    card={card}
                                    info={reminders}
                                    {...other}
                                />)
                            }

                        })
                    }

                </article>
                <div className="col s1 m2 l2"></div>
            </section>

        )
    }
}

export default Home