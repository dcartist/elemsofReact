import React, { Component } from '../../../node_modules/@types/react';
import { Link} from "../../../node_modules/react-router-dom";
// import '../Names/names.css'
class NameButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            language: "",
            info: {},
            name:"",
            theClass: ""
        }
    }
    render() {
        // const divStyleOutside = {
        //     // display: 'inline-block',
        //     backgroundColor: 'black'
        //       }
        return (
            <div key={this.props.language}>
                 {/* <Link to={"/language/" + this.props.language} params={{ language: this.props.language, info: this.props.info, name:this.props.name }}>
                <li key={this.props.language} style={divStyleOutside}>
                {this.props.name}
            </li></Link> */}
                 <Link to={"/language/" + this.props.language} params={{ language: this.props.language, info: this.props.info, name:this.props.name }}>
                <li key={this.props.language}>
                {this.props.name}
            </li></Link>
                 {/* <Link to={"/language/" + this.props.language} params={{ language: this.props.language, info: this.props.info, name:this.props.name }}>
                <li key={this.props.language} style={divStyleOutside}>
                {this.props.name}
            </li></Link> */}
            </div>
        );
    }
}

export default NameButton;