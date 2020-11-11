import React, { Component } from "react";
import './App.css';
import New2020 from "../2020/Index"
import New2020Navigation from "../2020/Navigation"
import About from '../2020/About.js'
import {Route, Switch} from "react-router-dom";
import Home from '../2020/Main'

class App extends Component {
constructor(){
  super()
  this.state = {
    language: null
  };
  this.setLanguage = this.setLanguage.bind(this);
  
}
 setLanguage(language) {
  this.setState({ language: language})
}
  render(){
    console.log("Welcome to Elements of")
    return (
      <div className="App">
        <New2020Navigation></New2020Navigation>
       
  <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/languages" exact component={New2020}/>
        <Route path="/2020" exact component={New2020}/>
        <Route path="/2020/Nav" exact component={New2020Navigation}/>
        </Switch>
      </div>
    );
  }
}

export default App;
