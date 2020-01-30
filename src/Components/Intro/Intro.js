import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import './style.css'

class Intro extends Component {
    static defaultProps = {
        color: '#000080',
        theme: 'light'
      };
    render() {
        return (
            <Window className="smallerWindow"
        color={this.props.color}
        theme={this.props.theme}
        theme={this.props.theme}
        chrome
        horizontalAlignment="center"
        height="300px"
        padding="20px"
        margin="20px"
        width="500px"
      >
        <TitleBar title="Welcome to Elements of " controls/>
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>WELCOME TO ELEMENTS OF</Text>
      </Window>
        );
    }
}

export default Intro;