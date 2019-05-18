import React from 'react';


class Login extends React.Component {

    render() {
        return (
            <div>
                <button className={'button'}
                onClick={()=>{
                    this.props.onRouteChange('home')
                }}>
                    Log In
                </button>
            </div>

        )
    }
}

export default Login