import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="aboutDisplay">
                <h1>What & Why?</h1>
                <p>Language: the method of human communication, either spoken or written, consisting of the use of words in a structured and conventional way.</p>

                <p>This is the rosetta stone of Programming Languages. Elements Of is a project that explores programming language in a different format. Bringing awareness to different programming languages and bringing life into the history of the tech world, through an artistic approach.</p>

                <h1>Who?</h1>
                <p>Paula Bannerman (@Dcartist). An artistic software engineer born and raised in the Washington DC area. Her artistic background includes iPad and tablet drawing, photography, video, painting, graphite, charcoal/pastel, computer-generated 2d/3d, and silversmith/jewelry. As well, her programming language background consists of Turbo Pascal, Qbasic, HTML, CSS, Javascript, Python, and SQL. Currently, she works as an instructor associate at General Assembly, graphic designer, and advocate for the arts in the STEM (STEAM).</p>
                {/* <p>Nadir Abdulhaqq. Hailing from California, Nadir is a multi-talented computer science genius with more than 20 years of experience in the technology field. Filled with amazingness and knowledge, Nadir provides substantial information from computer languages, technology to the people themselves.</p> */}
            </div>
        );
    }
}

export default About;