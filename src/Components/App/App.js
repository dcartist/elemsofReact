import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
// import Name from '../Names/Names'
import About from '../About/About.js'
import NavBar from '../NavBar/NavBar'
// import Intro from '../Intro/Intro'
import Language from '../Language/LanguageInfo'
import Trial from '../Trial/Trial'
import {Route, Switch} from "react-router-dom";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from '../Home/Home'
import Intro from "../Intro/Intro";
import ProgramListing from '../Home/ProgramHome'
import { AnimatedSwitch } from 'react-router-transition';

import Proposal from "../Proposal/Proposal.js"

class App extends Component {
constructor(props){ //This is a comment
  super(props)
  this.state = {
    language: null
  };
  this.setLanguage = this.setLanguage.bind(this);
  
}
 setLanguage(language) {
  this.setState({ language: language})
}
  render(){
    return (
      <div className="App">
        <NavBar></NavBar>
       {/* <Link to="/about">about</Link> */}
       {/* <Home></Home> */}
  <Switch>
  <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/listing" component={ProgramListing}/>
        <Route path="/trial" component={Trial}/>
        <Route path="/intro" component={Intro}/>
        <Route path="/proposal" component={Proposal}/>
          <Route path="/language/:language" render={(props)=> <Language setLanguage={this.setLanguage} {...props} {...this.state} />} />
          </AnimatedSwitch>
          </Switch>

      </div>
    );
  }
}

export default App;
