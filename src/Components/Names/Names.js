import React, { Component } from 'react';
import names from '../../data/compNames.json'
import './names.css'
class Names extends Component {
   
    render() {
        let thenames = names.map( info => <div>
            <li>
            {info.name}
        </li>
        </div>)
        return (
            <div >
                <p>So far there are <span>{names.length}</span> listed languages below</p>
                <div className="mainDiv">{thenames}</div>
                
                {/* <ul>
                {thenames}
                </ul> */}
                
            </div>
        );
    }
}

export default Names;