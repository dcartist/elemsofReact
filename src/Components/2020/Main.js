import React, { Component } from 'react';
import TypingWriting from "./Typing.js";
import "./style.css"
class Main extends Component {
    render() {
        return (
            <div className="homeDisplay">
                <h1>Elements of Programming Languages</h1>
                <TypingWriting></TypingWriting>
            </div>
        );
    }
}

export default Main;