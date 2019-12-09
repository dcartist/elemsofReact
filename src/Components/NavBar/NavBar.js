import React, { Component } from 'react';
import './NavBar.css'
class NavBar extends Component {
    render() {
        return (
            <div className="mainInfo" >
                <ul className="navBar">
                    <li>HOME</li>
                    <li> ABOUT</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;