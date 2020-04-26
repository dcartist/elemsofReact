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
        {/* <h1>Elements of</h1>
        <p>
          The elements of.. is a platform to display a listing of all of the
          programming languages
        </p> */}
        <h2>WHAT & WHY?</h2>

        <section1>
          <div>
            {/* <img className="iconresized" src={Paula} /> */}
          </div>
          <div className="rightsidetext2">
          <article>
          <p>
              <b>Language:</b> the method of human communication, either spoken or
              written, consisting of the use of words in a structured and
              conventional way.
            </p>
            <p>
            This is the rosetta stone of Programming Languages. Elements Of is a project that explores programming language in a different format. Bringing awareness to different programming languages and bringing life into the history of the tech world, through an artistic approach. 
            </p>

            <p>

            </p>
          </article>
          </div>
        </section1>
        

        {/* <h2>ABOUT</h2> */}
        <h2>WHO?</h2>
        <section>
          <div>
            <img className="iconresized" src={Paula} />
          </div>
          <div className="rightsidetext">
            <p>
              <b>Paula Bannerman</b> (@Dcartist) is an artistic software engineer born
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
        <section>
          <div>
            <h1>Talking Heads & Geniuses </h1>
          </div>
          {/* <div> */}
          <div className="rightsidetext2">
            <p>
             <b>Nadir Abdulhaqq</b>
            </p>
            <p>Hailing from California, Nadir is a multi-talented computer science genius with more than 20 years of experience in the technology field. Filled with amazingness and knowledge, Nadir provides substantial information from computer languages, technology to the people themselves.
 </p>
          </div>
        </section>
        <h2>Big Thank you to...</h2>

<section1>
  <div>
    {/* <img className="iconresized" src={Paula} /> */}
  </div>
  <div className="rightsidetext2">
  <article>
  <p>
      The staff at General Assembly, Washington DC chapter.
    </p>
    {/* <p>
    This is the rosetta stone of Programming Languages. Elements Of is a project that explores programming language in a different format. Bringing awareness to different programming languages and bringing life into the history of the tech world, through an artistic approach. 
    </p> */}

    <p>

    </p>
  </article>
  </div>
</section1>

      </div>
    );
  }
}

export default About;
