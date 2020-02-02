import React, { Component } from "react";
import Paula from "../../Images/paula.jpg";
import "./About.css";
class About extends Component {
  render() {
    console.log("This is more than just about");
    return (
      <div>
        <div className="Fulldisplay">
          <h1>The rosettta stone of programming languages</h1>
        </div>
        <h1>Elements of</h1>
        <p>
          The elements of.. is a platform to display a listing of all of the
          programming languages
        </p>
        <h2>ABOUT</h2>
        <section>
          <div>
            <img className="iconresized" src={Paula} />
          </div>
          <div className="rightsidetext">
            <p>
              Paula Bannerman (@Dcartist) is an artistic software engineer born
              and raised in the Washington DC area. Her artistic background
              includes iPad and tablet drawing, photography, video, painting,
              graphite, charcoal/pastel, computer-generated 2d/3d, and
              silversmith/jewelry. As well, her programming language background
              consists of Turbo Pascal, Qbasic, HTML, CSS, Javascript, Python,
              and SQL. Currently, she works as an instructor associate at
              General Assembly, graphic designer, and advocate for the arts in
              the STEM (STEAM).
            </p>
          </div>
        </section>

        <h2>WHY?</h2>

        <section>
          <div>
            {/* <img className="iconresized" src={Paula} /> */}
          </div>
          <div className="rightsidetext">
            <p>
              Language: the method of human communication, either spoken or
              written, consisting of the use of words in a structured and
              conventional way.
            </p>
          </div>
        </section>

        <h2>WHO?</h2>
      </div>
    );
  }
}

export default About;
