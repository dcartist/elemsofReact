import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import CountUp from 'react-countup';
import NameButton from '../NameButtons/NameButton'
import names from '../../data/compNames.json'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './names.css'
import { Link} from "react-router-dom";
class Names extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonChanged: true,
            value: "",
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

    searchField = (e) => {
        e.preventDefault();
        this.setState({value: e.target.value})
        console.log(this.state.value)
        // thenames = names.filter( funciton(item){
        //     return(
                
        //     )
        // } )

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
       
        return (
            <div className="namesBody">
   <div className="toTheLeft">
   <span className="p-float-label">
    <InputText id="in" value={this.state.value} onChange={this.searchField} />
    {/* <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} /> */}
    <label htmlFor="in">Search</label>
</span>
   </div>
                {/* <button onClick={this.notAvailable}> This is a button test</button> */}
                <p>So far there are <br/><span><CountUp end={names.length} duration={3.75}/></span>  <br/>listed languages below</p>

                <div className="mainDiv">{thenames}</div>
                
            </div>
        );
    }
}

export default Names;