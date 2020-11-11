import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import New2020 from "../2020/Index"
import New2020Navigation from "../2020/Navigation"
// import Name from '../Names/Names'
import About from '../2020/About.js'
// import Language from '../Language/Language'
// import Trial from '../Trial/Trial'
import {Route, Switch} from "react-router-dom";
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import {Route, Link, Switch, Redirect} from "react-router-dom";
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
        {/* <Route path="/trial" component={Trial}/>
          <Route path="/language/:language" render={(props)=> <Language setLanguage={this.setLanguage} {...props} {...this.state} />} /> */}
          </Switch>
      </div>
    );
  }
}

export default App;
