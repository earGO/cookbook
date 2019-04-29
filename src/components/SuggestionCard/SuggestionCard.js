import React from 'react';

const SuggestionCard = (props) => {
    const {info,card,onRouteChange} = props;
    if(card==='meal'){
        return (
            <div className="col l12 s12 m12 valign-wrapper center-align bordered-blue">
                <div className="card hoverable"
                     onClick={()=>onRouteChange('recipe',`${info._id}`)}
                >
                    <div className="card-image">
                        <img src="" alt={''}/>
                        <span className="card-title">Breakfast!</span>
                    </div>
                    <div className="card-content">
                        <p>Today's breakfast is <strong>{info.mealName}</strong>. Let's start cooking!</p>
                    </div>
                </div>
            </div>
        )
    } else if (card==='todos') {
        return (
            <div className="col l12 s12 m12 valign-wrapper center-align bordered-blue">
                <div className="card hoverable"
                     onClick={()=>onRouteChange('todos')}
                >
                    <div className="card-image">
                        <img src=""  alt={''}/>
                        <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                        <p><strong>{info[0]}</strong> and {info.length-1} other things to do for an evening</p>
                    </div>
                </div>
            </div>
        )
    }else if(card==='reminders'){
        return (
            <div className="col l12 s12 m12 valign-wrapper center-align bordered-blue">
                <div className="card hoverable"
                     onClick={()=>onRouteChange('reminders')}
                >
                    <div className="card-image">
                        <img src=""  alt={''}/>
                        <span className="card-title">Card Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"
                           href={'/'}
                        ><i
                            className="material-icons">add_shopping_cart</i></a>
                    </div>
                    <div className="card-content">
                        <p>You have <strong>{info.length}</strong> reminders. Manage or dismiss them. You can automaticaly place an order for your food using icon.</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default SuggestionCard