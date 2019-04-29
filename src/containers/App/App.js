import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getRecipes,naviAction,getUser,todosAction,remindersAction } from "./actions";

import Navbar from "../../components//Navbar/Navbar";
import Footer from "../../components//Footer/Footer";

import Home from "../Home/Home";
import Login from "../Login/Login";
import Recipes from "../Recipes/Recipes";
import Recipe from "../Recipe/Recipe";
import ToDos from "../ToDos/ToDos";
import Reminders from "../Reminders/Reminders";
import Groceries from "../Groceries/Groceries";
import Surprise from "../Surprise/Surprise";
import Settings from "../Settings/Settings";
import Search from "../Search/Search";
import Banquett from "../Banquett/Banquett";


/*Impoting in App component are the props and actions, needed to routing and passing ID's
* to containers of a propper functionality*/

const mapStateToProps = (state) =>{
  return {
    recipes:state.getRecipes.recipes,
    recipesPending:state.getRecipes.recipesPending,
    showPage:state.naviReducer.showPage,
    singleId:state.naviReducer.singleId,
      user:state.userReduser.user,
    userIsPending:state.userReduser.userIsPending,
    userError: state.userReduser.userError,
      todos:state.todosReduser.todos,
    reminders:state.remindersReduser.reminders,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRecipes:() => getRecipes(dispatch),
    onRouteChange:(route,id) => dispatch(naviAction(route,id)),
      onLogin:() => getUser(dispatch),
      onRequestTodos:(todos) => dispatch(todosAction(todos)),
    onRequestReminders:(reminders) => dispatch(remindersAction(reminders))
  }
};

class App extends Component {

  componentDidMount = async () => {
    await this.props.onLogin();
    await this.props.onRequestRecipes();
    await this.props.onRequestTodos(['Put fish out of freezer to fridge','Put beans into water','Fill steamer with water','Something else']);
    await this.props.onRequestReminders(['Go buy some food','Dinner with Robin at 19 p.m. at hers']);
    console.log('monted app')
  };

  render() {
    const {recipes,showPage,singleId,user,todos,reminders,recipesPending,userIsPending,
            onRouteChange
    }=this.props,
          featured=recipes[0];
    if(!recipesPending&&!userIsPending) {
    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange}/>
        {
          showPage === 'home'
              ? <Home user={user} recipe={featured} todos={todos} reminders={reminders} onRouteChange={onRouteChange}/>
              : (showPage === 'login'
                  ? <Login onRouteChange={onRouteChange}/>
                  : (showPage === 'recipes'
                          ? <Recipes/>
                          : (showPage === 'recipe'
                                  ? <Recipe mealId={singleId}/>
                                  : (showPage === 'todos'
                                          ? <ToDos/>
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
