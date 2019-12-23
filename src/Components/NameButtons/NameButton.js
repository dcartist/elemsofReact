import React, { Component } from 'react';
import { Link} from "react-router-dom";
class NameButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            language: null,
            info: null,
            theClass: null
        }
    }
    render() {
        
        return (
            <div key={this.state.language}> <Link to={"/language/" + this.state.language}>
                <li key={this.state.language}>
                {this.state.info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")}
            </li></Link>
            </div>
        );
    }
}

export default NameButton;