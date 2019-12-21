import React, { Component } from 'react';
import './NavBar.css'
import Name from '../Names/Names'
import About from '../About/About.js'
import Logo from '../../Images/elemof.png'
import { Link} from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <div className="mainInfo" >
                <ul className="navBar">
                <Link to="/"> <img src={Logo} className="smallerImage" alt="elements of logo"/></Link>
               
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;