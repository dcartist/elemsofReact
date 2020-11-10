import React, { Component } from 'react';

class ProgramName extends Component {
    render() {
        return (
            <div className="programNameDisplay">
                {this.props.name}
            </div>
        );
    }
}

export default ProgramName;