import React, { Component } from 'react';
import "./style.css"
import axios from "axios"

class Index extends Component {
    constructor(){
        super()
      this.state={
          nameSearched:"",
          programResults:[]
      }  
    }
    programSearch = (e)=>{
        e.preventDefault()
        this.setState({nameSearched: e.target.value})
        axios.get(`https://elementsof.vercel.app/api/id/${e.target.value}`).then( results=>{console.log(results.data)})

    }
    render() {
        return (
            <div className="elementBase">
                <input type="text" onChange={this.programSearch}></input>
            </div>
        );
    }
}

export default Index