import React, { Component } from 'react';
import "./style.css"
import axios from "axios"
import ProgramName from "./Modal"
import ButtonSelection from "./Button"
class Index extends Component {
    constructor(){
        super()
      this.state={
          nameSearched:"",
          programResults:[],
          apiUrl:"https://elementsof.vercel.app/api/name/",
          searchedBy: `Search by name`,
          text: '',
      }  
    }
    programSearch = (e)=>{
        e.preventDefault()
        this.setState({nameSearched: e.target.value})
        axios.get(`${this.state.apiUrl}${e.target.value}`).then( results=>{
            this.setState({programResults: results.data})
        })
    }

    apiSelection = (apiroute) => {     
        this.setState({apiUrl:`https://elementsof.vercel.app/api/${apiroute}/`})
        this.setState({searchedBy: `Search by ${apiroute}` })
    }

    render() {
        return (
            <div className="elementBase">
                <div>
                [ <input type="text" onChange={this.programSearch} placeholder={this.state.searchedBy}></input> ]
                </div>
                <div>
                <ButtonSelection apiSelection={this.apiSelection}></ButtonSelection>
                </div>
            <div className="displayedNames">
            {this.state.programResults.map(item=>(<ProgramName {...item}></ProgramName>))}
            </div>
               
                
            </div>
        );
    }
}

export default Index