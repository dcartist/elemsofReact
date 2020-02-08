import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CountUp from 'react-countup';
import NameButton from '../NameButtons/NameButton'
import NameButtonDis from '../NameButtons/NameButtonDis'
import names from '../../data/compNames.json'
import '../Names/names.css'

class Trial extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonChanged: true,
            value: "",
            programs: null,
            strueArray:[],
            programNames: names
        }
    }


    searchField = (e) => {
        e.preventDefault();
        //setting the value of the target
        this.setState({value: e.target.value})

        console.log(this.state.value)
        //filtering thie information

        // users= users.filter(function(item) {
        //     for (var key in filter) {
        //       if (item[key] === undefined || item[key] != filter[key])
        //         return false;
        //     }
        //     return true;
        //   });



        
//         let newNames = names.filter(item => {
//             let targetLowered = e.target.value.toLowerCase()
//             let changedName = item.name.toLowerCase()
//             let  thisTest = changedName.includes(targetLowered)
            
//         return thisTest
//         }
//         //     e.target.value.toLowerCase() ===
//         // item.name
//         //   .split("")
//         //   .slice(0, e.target.value.length)
//         //   .join("")
//         //   .toLowerCase()          
// )
//         let newNames = names.filter(item => e.target.value.toLowerCase() ===
//         item.name
//           .split("")
//           .slice(0, e.target.value.length)
//           .join("")
//           .toLowerCase()          
// )
let counterTrue = 0
let counter = 0
let trueArray = []
let arrayTest = names.map(item => {
    
    let targetLowered = e.target.value.toLowerCase()
    let changedName = item.name.toLowerCase()
    let  thisTest = changedName.includes(targetLowered)
    if (thisTest) {
        counterTrue++
        trueArray.push(item)
        this.state.strueArray.push(item)
    } else {
        counter++
    }

    // console.log(thisTest)
    // console.log(trueArray)
    // console.log(`True: ${counterTrue} False: ${counter}`)
    this.setState({programNames: trueArray})
})


//         let newNames = names.filter(item => e.target.value.toLowerCase() ===
//         item.name
//           .split("")
//           .slice(0, e.target.value.length)
//           .join("")
//           .toLowerCase()
          
// )
        // this.setState({programNames: newNames})
        // this.setState({programNames: trueArray})
        // console.log(this.state.programNames.search(regEx))
    }



    render() {
        console.log(this.state.programNames)
        console.log(this.state.strueArray)

        return (
             <div className="namesBody">
                
                {/* <button onClick={this.notAvailable}> This is a button test</button> */}
                {/* <p class="lessSpace">So far there are <br/><span className="largeText"><CountUp end={names.length} duration={3.75}/></span>  <br/>listed languages below</p> 
                <p className="smallText"> *This list is not the full complete listing</p> */}
    {/* <p> Actual searched items {this.state.programNames.length}</p> */}
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

export default Trial;