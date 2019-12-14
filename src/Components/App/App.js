import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import Name from '../Names/Names'
import About from '../About/About.js'
import NavBar from '../NavBar/NavBar'
import Language from '../Language/Language'
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from '../Home/Home'

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    language: null
  };
  this.setLanguage = this.setLanguage.bind(this);
  
}
 setLanguage(language) {
  this.serState({ language: language})
}
  render(){
    return (
      <div className="App">
        <NavBar></NavBar>
       {/* <Link to="/about">about</Link> */}
       {/* <Home></Home> */}
  <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
          <Route path="/language/:language" render={(props)=> <Language setLanguage={this.setLanguage} {...props} {...this.state} />} />
          </Switch>
      </div>
    );
  }
}

export default App;
