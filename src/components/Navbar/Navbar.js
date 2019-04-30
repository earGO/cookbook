import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import '../../styles/global.scss';

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
                            <a href="/" data-target="mobile-demo" className={"sidenav-trigger"}><i
                                className="material-icons grey-text text-darken-4">menu</i></a>
                            <ul className="hide-on-med-and-down">
                                <li  className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('home')}>
                                    <div className={'grey-text text-darken-4'}
                                    >HOME</div>
                                </li>
                                <li  className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('recipes')}>
                                    <div className={'grey-text text-darken-4'}
                                    >Recipes</div>
                                </li>
                                <li className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('todos')}>
                                    <div className={'grey-text text-darken-4'}
                                    >ToDos</div>
                                </li>
                                <li className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('surprise')}>
                                    <div className={'grey-text text-darken-4'}
                                    >Surpise Me</div>
                                </li>
                                <li className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('groceries')}>
                                    <div className={'grey-text text-darken-4 mh10 ph10'}
                                    >Groceries</div>
                                </li>
                                <li className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('settings')}>
                                    <div className={'grey-text text-darken-4'}
                                    >Settings</div>
                                </li>
                                <li className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('stats')}>
                                    <div className={'grey-text text-darken-4'}
                                    >Stats</div>
                                </li>
                                <li className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('search')}>
                                    <div className={'grey-text text-darken-4'}
                                    >Search</div>
                                </li>
                                <li className={'top-nav-link ph10'}
                                    onClick={()=>onRouteChange('login')}>
                                    <div className={'grey-text text-darken-4'}
                                    >LogIn</div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <ul className={"sidenav"} id="mobile-demo">
                    <li  className={'top-nav-link ph10'}
                         onClick={()=>onRouteChange('home')}>
                        <div className={'grey-text text-darken-4'}
                        >HOME</div>
                    </li>
                    <li  className={'top-nav-link ph10'}
                         onClick={()=>onRouteChange('recipes')}>
                        <div className={'grey-text text-darken-4'}
                        >Recipes</div>
                    </li>
                    <li className={'top-nav-link ph10'}
                        onClick={()=>onRouteChange('todos')}>
                        <div className={'grey-text text-darken-4'}
                        >ToDos</div>
                    </li>
                    <li className={'top-nav-link ph10'}
                        onClick={()=>onRouteChange('surprise')}>
                        <div className={'grey-text text-darken-4'}
                        >Surpise Me</div>
                    </li>
                    <li className={'top-nav-link ph10'}
                        onClick={()=>onRouteChange('groceries')}>
                        <div className={'grey-text text-darken-4 mh10 ph10'}
                        >Groceries</div>
                    </li>
                    <li className={'top-nav-link ph10'}
                        onClick={()=>onRouteChange('settings')}>
                        <div className={'grey-text text-darken-4'}
                        >Settings</div>
                    </li>
                    <li className={'top-nav-link ph10'}
                        onClick={()=>onRouteChange('stats')}>
                        <div className={'grey-text text-darken-4'}
                        >Stats</div>
                    </li>
                    <li className={'top-nav-link ph10'}
                        onClick={()=>onRouteChange('search')}>
                        <div className={'grey-text text-darken-4'}
                        >Search</div>
                    </li>
                    <li className={'top-nav-link ph10'}
                        onClick={()=>onRouteChange('login')}>
                        <div className={'grey-text text-darken-4'}
                        >LogIn</div>
                    </li>
                </ul>
            </section>
        )
    }

}

export default Navbar