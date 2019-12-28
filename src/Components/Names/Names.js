import React, { Component } from 'react';
// import {InputText} from 'primereact/inputtext';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CountUp from 'react-countup';
import NameButton from '../NameButtons/NameButton'
import NameButtonDis from '../NameButtons/NameButtonDis'
import names from '../../data/compNames.json'
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
import './names.css'
// import { Link} from "react-router-dom";

class Names extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonChanged: true,
            value: "",
            programs: null,
            programNames: names
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
        let newNames = names.filter(item => e.target.value.toLowerCase() ===
        item.name
          .split("")
          .slice(0, e.target.value.length)
          .join("")
          .toLowerCase()
          
)
        this.setState({programNames: newNames})
     
    }
    render() {
      
       
        return (
            <div className="namesBody">
                
                {/* <button onClick={this.notAvailable}> This is a button test</button> */}
                <p class="lessSpace">So far there are <br/><span className="largeText"><CountUp end={names.length} duration={3.75}/></span>  <br/>listed languages below</p> 
                <p className="smallText"> *This list is not the full complete listing</p>
                <div className="toTheLeft">
                <form>
  <TextField id="standard-basic" label="Search for a Language"  value={this.state.value} onChange={this.searchField} />
</form>
              
                {/* <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} /> */}
                </div>
                <div className="mainDiv">
                    {this.state.programNames.map( (info, language) => {
                        
            // console.log(info.summary)
            if (info.summary == "No summary available"){
                return <NameButtonDis key={info.id}language={info.id} info={info} name={info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")}></NameButtonDis> 

            } else {

                return  <NameButton key={info.id} language={info.id} info={info} name={info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")}></NameButton> 

            }
            // End of conditional
        })}              
            </div>
            </div>
        );
    }
}

export default Names;