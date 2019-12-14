import React, { Component } from 'react';
import './NavBar.css'
import Logo from '../../Images/elemof.png'
import { Link} from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <div className="mainInfo" >
                <ul className="navBar">
                <img src={Logo} className="smallerImage" alt="elements of logo"/>
                    <li>HOME</li>
                    <li> ABOUT</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;