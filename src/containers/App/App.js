import React, { Component } from 'react';
import './App.css';

import Navbar from "../../components//Navbar/Navbar";
import ListDouble from "../../components//ListDouble/ListDouble";
import ListOne from "../../components//ListOne/ListOne";
import Footer from "../../components//Footer/Footer";
import Featured from "../../components//Featured/Featured";
import ListTriple from "../../components//ListTriple/ListTriple";
import Search from "../Search/Search";

import { connect } from 'react-redux';
import { getRecipes,naviAction } from "./actions";


const mapStateToProps = (state) =>{
  return {
    recipes:state.getRecipes.recipes,
    isPending:state.getRecipes.isPending,
    error:state.getRecipes.error,
    showPage:state.naviReducer.showPage,
    singleId:state.naviReducer.singleId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRecipes:() => getRecipes(dispatch),
    onRouteChange:(route,id) => dispatch(naviAction(route,id))
  }
}

class App extends Component {

  componentDidMount = () => {
    this.props.onRequestRecipes();
    console.log('monted app')
  };

  render() {
    const {recipes,showPage,error,isPending,onRouteChange}=this.props,
          featured=recipes[0];
    return (
      <div className="App">
        <Navbar onRouteChange={onRouteChange}/>
        {
         showPage ==='index'
        ?
          <section className={'container bordered-blue'} id={'content'}>
            <Featured recipe={featured}/>
          </section>
          :( showPage === 'single'
             ?
             <section className={'container bordered-blue'} id={'content'}>
                <Featured recipe={featured} onRouteChange={onRouteChange}/>
                <ListOne recipes={recipes} onRouteChange={onRouteChange}/>
              </section>
                 :<section className={'container bordered-blue'} id={'content'}>
                   <Featured recipe={featured} onRouteChange={onRouteChange}/>
                   <Search />
                   <ListTriple recipes={recipes} onRouteChange={onRouteChange}/>
                   <ListDouble recipes={recipes} onRouteChange={onRouteChange}/>
                   <ListOne recipes={recipes} onRouteChange={onRouteChange}/>
                 </section>
             )
        }
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
