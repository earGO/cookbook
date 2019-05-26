import React from 'react';

import './NavbarSide.scss'

const NavbarSide = () => {
    return (
        <div className={'navbar-side'}>
            <ul className={''}>
                <li  className={'navbar-side-item'}>
                    <div className={''}
                    >Home</div>
                </li>
                <li  className={'navbar-side-item'}>
                    <div  className={''}
                    >Planner</div>
                </li>
                <li className={'navbar-side-item'}>
                    <div className={''}
                    >Todos</div>
                </li>
                <li  className={'navbar-side-item'}>
                    <div className={''}
                    >Groceries</div>
                </li>
                <li  className={'navbar-side-item'}>
                    <div className={''}
                    >Search</div>
                </li>
            </ul>
        </div>

    )
};

export default NavbarSide;