import React, { Component } from 'react';
import { Link} from "react-router-dom";
// import '../Names/names.css'
class NameButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            language: "",
            info: {},
            name:"",
            theClass: ""
        }
    }
    render() {
        const divStyleOutside = {
            // display: 'inline-block',
            backgroundColor: 'black'
              }
        return (
            <div key={this.props.language}> <Link to={"/language/" + this.props.language}>
                <li key={this.props.language} style={divStyleOutside}>
                {this.props.name}
            </li></Link>
            </div>
        );
    }
}

export default NameButton;