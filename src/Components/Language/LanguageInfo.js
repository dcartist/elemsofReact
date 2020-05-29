import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import names from '../../data/compNames.json'
import './Language.css'

class Language extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            programNames:null,
            summary: "",
            info: {},
            theClass: ""
        }
    }
    goHomeViaHistory = () => {
        this.props.history.push("/")
        // not a hard direct
      }
    render() {
        // let information = names[this.props.match.params.language]
        let information = names.filter(item => item.id == this.props.match.params.language)
        console.log(information)
        return (    
            <div>
    <h1>{information[0].name}</h1>
   <article>
   {information[0].summary}
   </article>
   
            <Link to="/listing"><button> GoTo = home</button></Link>
                {/* <button onClick={this.goHomeViaHistory}> GoTo = home</button> */}
            </div>
        );
    }
}

export default Language;