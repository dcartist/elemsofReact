import React, { Component } from 'react';
import CountUp from 'react-countup';
import names from '../../data/compNames.json'
import './names.css'
import { Link} from "react-router-dom";
class Names extends Component {
   
    render() {
        
        let thenames = names.map( (info, language) => 
           
        <div> <Link to={"/language/" + language}>
            <li>
            {info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")}
        </li></Link>
        </div>
        

        )
        return (
            <div className="namesBody">
                <p>So far there are <br/><span><CountUp end={names.length} duration={3.75}/></span>  <br/>listed languages below</p>
                <div className="mainDiv">{thenames}</div>
                
            </div>
        );
    }
}

export default Names;