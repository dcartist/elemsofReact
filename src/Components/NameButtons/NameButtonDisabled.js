import React, { Component } from 'react';
// import { Link} from "react-router-dom";
import '../Names/names.css'
class NameButtonDis extends Component {
    constructor(props){
        super(props)
        this.state = {
            language: "",
            info: "",
            theClass: ""
        }
       
    }
    
    render() {
        const divStyleOutside = {
            display: 'inline-block',
            backgroundColor: '#801902',
            paddingTop: '10px'
              }
              const divStyleInside = {
                  fontSize: '10px',
                  display: 'block'
                    }
        return (
            <div key={this.props.language}> 
                 <li key={this.props.language}style={divStyleOutside}>
                {this.props.name}<br></br>
                <span style = {divStyleInside}> (No info available) </span>
            </li>
            
            </div>
        );
    }
}

export default NameButtonDis;