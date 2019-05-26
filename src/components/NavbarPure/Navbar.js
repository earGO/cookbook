import React from 'react';

import './Navbar.scss';
import NavbarSideToggleButton from "../NavbarSide/NavbarSideToggleButton";

const Navbar = (props) => {
    return (
        <header className={'pure-navbar'}>
            <div className={'pure-navbar-navigation'}>
                <div>
                    <NavbarSideToggleButton/>
                </div>
                <div className={'navbar-logo'}>Logo</div>
                <div className={'pure-navbar-spacer'} />
                <div className={'navbar-navigation-items '}>
                    <ul className={''}>
                            <li  className={'navbar-navigation-item'}>
                                <div className={''}
                                >Home</div>
                            </li>
                        <li  className={'navbar-navigation-item'}>
                            <div  className={''}
                            >Planner</div>
                        </li>
                        <li className={'navbar-navigation-item'}>
                            <div className={''}
                            >Todos</div>
                        </li>
                        <li  className={'navbar-navigation-item'}>
                            <div className={''}
                            >Groceries</div>
                        </li>
                        <li  className={'navbar-navigation-item'}>
                            <div className={''}
                            >Search</div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    )
};

export default Navbar;