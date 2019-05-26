import React from 'react';
import './NavbarSideToggleButton.scss';

const NavbarSideToggleButton = (props) => {
    return (
        <button className={'navbar-toggle-button'}>
            <div className={'navbar-toggle-button-line'}/>
            <div className={'navbar-toggle-button-line'}/>
            <div className={'navbar-toggle-button-line'}/>
        </button>

    )
};

export default NavbarSideToggleButton;