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
import { getRecipes } from "./actions";


const mapStateToProps = (state) =>{
  return {
    recipes:state.recipes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRecipes:() => getRecipes(dispatch)
  }
}

class App extends Component {

  componentDidMount = () => {
    this.props.onRequestRecipes();
    console.log('monted app')
  };

  render() {
    const {recipes}=this.props,
          featured=recipes[0];
    return (
      <div className="App">
        <Navbar />
        <section className={'container bordered-blue'} id={'content'}>
          <Featured recipe={featured}/>
          <Search />
          <ListTriple recipes={recipes}/>
          <ListDouble recipes={recipes}/>
          <ListOne recipes={recipes}/>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
