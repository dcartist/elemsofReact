import React, { Component } from 'react';
// import {InputText} from 'primereact/inputtext';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CountUp from 'react-countup';
import NameButton from '../NameButtons/NameButton'
import NameButtonDis from '../NameButtons/NameButtonDisabled'
import names from '../../data/compNames.json'
import './names.css'
import { Link} from "../../../node_modules/react-router-dom";

class Names extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonChanged: true,
            value: "",
            programs: null,
            programNames: names,
            alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
            "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "clear"]
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
letters = (e) =>{
    e.preventDefault();
    console.log(e.target.innerHTML)
    if (e.target.innerHTML === "clear"){
        this.setState({programNames: names})
    } else {
        let newNames = names.filter(item => e.target.innerHTML.toLowerCase() ===
        item.name
          .split("")
          .slice(0, e.target.innerHTML.length)
          .join("")
          .toLowerCase()
)
this.setState({programNames: newNames})
    }
   
}
    searchField = (e) => {
        e.preventDefault();
        this.setState({value: e.target.value})
        console.log(this.state.value)
        //old way of doing it via filter
//         let newNames = names.filter(item => e.target.value.toLowerCase() ===
//         item.name
//           .split("")
//           .slice(0, e.target.value.length)
//           .join("")
//           .toLowerCase()
// )

//filter via includes
let trueArray = []
let arrayTest = names.map(item => {
    let targetLowered = e.target.value.toLowerCase()
    let changedName = item.name.toLowerCase().replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")
    let  thisTest = changedName.includes(targetLowered)
    if (thisTest) {   
        trueArray.push(item)
    } 

    this.setState({programNames: trueArray})
})
     
    }
    render() {
        console.log(this.state.programNames)

       
        return (
            <div className="namesBody">
               
                {/* <button onClick={this.notAvailable}> This is a button test</button> */}
                <p className="lessSpace">So far there are <br/><span className="largeText"><CountUp end={names.length} duration={3.75}/></span>  <br/>listed languages below</p> 
                <p className="smallText"> *This list is not the full complete listing</p>
                <div className="toTheLeft">
                
             


                <form>
  <TextField id="standard-basic" label="Search for a Language"  value={this.state.value} onChange={this.searchField} />
</form>
              
<p className="alphaSearch">
                {this.state.alphabet.map((info, index) => {
                    if (info === "clear"){
                        return <span className="clearedName" key={index}><Link to="#" onClick={this.letters}><button>{info}</button></Link></span>
                    }
                    else {
                        return <span className="alphabet" key={index}><Link to="#" onClick={this.letters}>{info}</Link></span>
                    }
                }) }</p>


                {/* <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} /> */}
                </div>
               
                <div className="mainDiv">
                    {this.state.programNames.map( (info, language) => {
                        
            // console.log(info.summary)
            if (info.summary == "No summary available"){
                return <NameButtonDis key={info.id}language={info.id} info={info} name={info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","")}></NameButtonDis> 

            } else {

                return  <NameButton key={info.id} language={info.id} info={info} name={info.name.replace("(programming language)", "").replace("programming language", "").replace("Programming Language", "").replace("(language)","").replace("language","").replace("(computer programming)","" )}></NameButton> 

            }
            // End of conditional
        })}              
            </div>
            </div>
        );
    }
}

export default Names;