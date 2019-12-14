import React, { Component } from 'react';
import names from '../../data/compNames.json'
import './Language.css'

class Language extends Component {
    goHomeViaHistory = () => {
        this.props.history.push("/")
        // not a hard direct
      }
    render() {
        let information = names[this.props.match.params.language]
        return (    
            <div>
    <h1>{information.name}</h1>
   <article>
   {information.summary}
   </article>
   

                <button onClick={this.goHomeViaHistory}> GoTo = home</button>
            </div>
        );
    }
}

export default Language;