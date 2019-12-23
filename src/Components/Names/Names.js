import React, { Component } from 'react';
import CountUp from 'react-countup';
import names from '../../data/compNames.json'
import './names.css'
import { Link} from "react-router-dom";
class Names extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonChanged: true,
            programs: null
        }
    }
    notAvailable= (evt) => {
        evt.preventDefault();
        console.log(this.state)
        if (this.state.buttonChanged === true){
            this.setState({buttonChanged: false})
        } else {
            this.setState({buttonChanged: true})
        }

    }
    render() {
        
        let thenames = names.map( (info, language) => {
            // console.log(info.summary)
            if (info.summary == "No summary available"){
                return(  <div key={language} className="greyedOut"> 
                 <li key={language}>
                {info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")}<br></br>
                <span className="smallText"> (No info available) </span>
            </li>
            
            </div>)

            } else {

                return (  <div key={language}> <Link to={"/language/" + language}>
                <li key={language}>
                {info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")}
            </li></Link>
            </div>)

            }
        }
           
      
        

        )
        // let thenames = names.map( (info, language) => 
           
        // <div key={language}> <Link to={"/language/" + language}>
        //     <li key={language}>
        //     {info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")}
        // </li></Link>
        // </div>
        

        // )
        return (
            <div className="namesBody">
                <button onClick={this.notAvailable}> This is a button test</button>
                <p>So far there are <br/><span><CountUp end={names.length} duration={3.75}/></span>  <br/>listed languages below</p>

                <div className="mainDiv">{thenames}</div>
                
            </div>
        );
    }
}

export default Names;