import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { naviAction,getUser,todosAction,remindersAction } from "./actions";

import Navbar from "../../components//Navbar/Navbar";
import Footer from "../../components//Footer/Footer";

import Home from "../Home/Home";
import Login from "../Login/Login";
import Recipe from "../Recipe/Recipe";
import ToDos from "../ToDos/ToDos";
import Reminders from "../Reminders/Reminders";
import Groceries from "../Groceries/Groceries";
import Surprise from "../Surprise/Surprise";
import Settings from "../Settings/Settings";
import Search from "../Search/Search";
import Banquett from "../Banquett/Banquett";
import Stats from "../Stats/Stats";

import * as keys from '../../config/keys';
import Planner from "../Planner/Planner";


/*Importing in App component are the props and actions, needed to routing and passing ID's
* to containers of a propper functionality*/

const
    BACKEND_URI = keys.BACKEND_URI,
    TODAY = new Date();

const mapStateToProps = (state) =>{
  return {
    /*navigation*/
    showPage:state.naviReducer.showPage,
    /*single recipe ID for a recipe display*/
    singleId:state.naviReducer.singleId,
    /*logged in user*/
      user:state.userReduser.user,
    userIsPending:state.userReduser.userIsPending,
    userError: state.userReduser.userError,
    /*todos*/
      todos:state.todosReduser.todos,
    /*reminders*/
    reminders:state.remindersReduser.reminders,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange:(route,id) => dispatch(naviAction(route,id)), //the router for an app
      onLogin:() => getUser(dispatch), //User fetcher
      onRequestTodos:(todos) => dispatch(todosAction(todos)),
    onRequestReminders:(reminders) => dispatch(remindersAction(reminders))
  }
};

class App extends Component {

  componentDidMount = async () => {
    await this.props.onLogin();
    await this.props.onRequestTodos(['Put fish out of freezer to fridge','Put beans into water','Fill steamer with water','Something else']);
    await this.props.onRequestReminders(['Go buy some food','Dinner with Robin at 19 p.m. at hers']);
    console.log('monted app')
  };

  render() {
    const { showPage,singleId,user,userIsPending,
            onRouteChange
    } = this.props;
    if(!userIsPending) {
    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange}/>
        {/**
        * DASHBOARD home screen MUST be the first screen always
        */}
        {showPage === 'login'
            ? <Login onRouteChange={onRouteChange}/>
              : ( showPage === 'home'
                    ? <Home user={user} date={TODAY} onRouteChange={onRouteChange} classname={'container-fles'}/>
                  : (showPage === 'planner'
                          ? <Planner/>
                          : (showPage === 'recipe'
                                  ? <Recipe mealId={singleId}/>
                                  : (showPage === 'todos'
                                          ? <ToDos date={TODAY} onRouteChange={onRouteChange}/>
                                          : (showPage === 'reminders'
                                                  ? <Reminders/>
                                                  : (showPage === 'groceries'
                                                          ? <Groceries/>
                                                          : (showPage === 'surprise'
                                                                  ? <Surprise/>
                                                                  : (showPage === 'settings'
                                                                          ? <Settings/>
                                                                          : (showPage === 'search'
                                                                                  ? <Search/>
                                                                                  : (showPage === 'stats'
                                                                                      ? <Stats />
                                                                                      : (showPage === 'banquett'
                                                                                          ? <Banquett/>
                                                                                          : <Home/>)
                                                                                    )
                                                                          )
                                                                  )
                                                          )
                                                  )
                                          )
                                  )
                          )
                  )
              )
        }
        <Footer/>
      </div>
    );
    }else {
      return (
          <div className="App">
            <Navbar onRouteChange={onRouteChange}/>
             <h1>Loading data</h1>
          </div>
      )
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
