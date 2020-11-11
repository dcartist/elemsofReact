import ReactTypingEffect from 'react-typing-effect';
import React, { Component } from 'react';

class Typing extends Component {
    render() {
        return (
            <ReactTypingEffect
            text={["with over 600+ programming languages listed!"]}
            speed={100}
            />
        );
    }
}

export default Typing;