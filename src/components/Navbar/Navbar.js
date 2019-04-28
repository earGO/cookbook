import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends React.Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render(){
        const {onRouteChange,...other} = this.props;
        return (
            <section>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper grey lighten-5 grey-text text-darken-4">
                            <a href="#" data-target="mobile-demo" className={"sidenav-trigger"}><i
                                className="material-icons">menu</i></a>
                            <ul className="hide-on-med-and-down">
                                <li className={'link'}
                                    onClick={()=>onRouteChange('home')}>
                                    <div><a className={'grey-text text-darken-4'}>HOME</a></div>
                                </li>
                                <li className={'link'}
                                    onClick={()=>onRouteChange('recipes')}>
                                    <div><a className={'grey-text text-darken-4'}>Recipes</a></div>
                                </li>
                                <li
                                    onClick={()=>onRouteChange('todos')}>
                                    <a className={'grey-text text-darken-4'}>ToDos</a>
                                </li>
                                <li
                                    onClick={()=>onRouteChange('surprise')}>
                                    <a className={'grey-text text-darken-4'}>Surpise Me</a>
                                </li>
                                <li
                                    onClick={()=>onRouteChange('groceries')}>
                                    <a className={'grey-text text-darken-4'}>Groceries</a>
                                </li>
                                <li
                                    onClick={()=>onRouteChange('settings')}>
                                    <a className={'grey-text text-darken-4'}>Settings</a>
                                </li>
                                <li
                                    onClick={()=>onRouteChange('stats')}>
                                    <a className={'grey-text text-darken-4'}>Stats</a>
                                </li>
                                <li
                                    onClick={()=>onRouteChange('search')}>
                                    <a className={'grey-text text-darken-4'}>Search</a>
                                </li>
                                <li
                                    onClick={()=>onRouteChange('login')}>
                                    <a className={'grey-text text-darken-4'}>LogIn</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <ul className={"sidenav"} id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </section>
        )
    }

}

export default Navbar