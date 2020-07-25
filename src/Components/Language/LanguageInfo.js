import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import names from '../../data/compNames.json'
import names from '../../data/results.json'
import './Language.css'
import parse from 'html-react-parser';

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

        // {information[0].summary.replace("\n", "\n\n")}
        let information = names.filter(item => item.id == this.props.match.params.language)
        console.log(information[0].summary.replace("\n", "\n\n"))
        return (    
            <div>
    <h1>{information[0].name}</h1>
   <article>
       {parse(information[0].summary)}
  
   </article>
   
            <Link to="/"><button> GoTo = home</button></Link>
                {/* <button onClick={this.goHomeViaHistory}> GoTo = home</button> */}
            </div>
        );
    }
}

export default Language;