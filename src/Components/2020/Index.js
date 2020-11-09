import React, { Component } from 'react';
import "./style.css"
import axios from "axios"

class Index extends Component {
    constructor(){
      this.state={
          nameSearched:"",
          programResults:[]
      }  
    }
    programSearch = (e)=>{
        e.preventDefault()
        this.setState({nameSearched: e.target.value})


    }
    render() {
        return (
            <div>
                <inpu value="" type="text" onChange={this.programSearch}></inpu>
            </div>
        );
    }
}

export default Index