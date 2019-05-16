import React from 'react';


class DashboardCardWrapper extends React.Component {

    render() {
        return (
            <div className="col l12 s12 m12 valign-wrapper center-align bordered-blue  hoverable"
                 onClick={()=>console.log('tadaaa')}
                >
                        {this.props.children}
            </div>
        );
    };
};

export default DashboardCardWrapper;