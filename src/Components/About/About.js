import React, { Component } from 'react';
import Paula from "../../Images/paula.jpg"
import "./About.css"
class About extends Component {
    render() {
        console.log("This is more than just about")
        return (
            <div>

                <img className="iconresized" src={Paula}/>
                <h1>Elements of</h1>
                <p>The elements of.. is a platform to display a listing of all of the programming languages</p> 
                <h2>ABOUT</h2>
                <p>Paula Bannerman (@Dcartist) is an artistic software engineer born and raised in the Washington DC area.  Her artistic background includes iPad and tablet drawing, photography, video, painting, graphite, charcoal/pastel, computer-generated 2d/3d, and silversmith/jewelry. As well, her programming language background consists of Turbo Pascal, Qbasic, HTML, CSS, Javascript, Python, and SQL. Currently, she works as an instructor associate at General Assembly, graphic designer, and advocate for the arts in the STEM (STEAM).</p>
                <h2>WHY?</h2>
                <h2>WHO?</h2>
            </div>
        );
    }
}

export default About;