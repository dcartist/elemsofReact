import React, { Component } from 'react';
import './Proposal.css'
import Time from '../Timeline/Time.js'
import Images from './ProposalImages.js'
import Future from '../Timeline/Future.js'
import AppDesign from './images/iPhone 6-7-8 Plus – 1.png'
import WebDeign from './images/Web 1920 – 1.png'
class Proposal extends Component {
    render() {
        return (
            <div>
              <h1>About Elements Of</h1>
			<div className="mainBox">
    <h2>Description</h2>
	<p>Language, by definition, is the method of human communication, either spoken or written, consisting of the use of words in a structured and conventional way. There is a beauty in the fact that humans have more than 600 forms of communicating with machines. </p>
	
	<p>
		The Elements Of is a multidimensional project that shows the human side and the artistic side of technology. The part of the project takes the programming languages and puts them in the format of the periodical table. Each element will have the information about the language interviews with the person or people who made it as well or interviews with historians about the language. This project will be turned into an app as well as made into a book.

	</p>

    {/* <h2>Details of the project</h2> */}
    <p>This project idea started a couple of years ago, but now since I fully understand how to build apps, I have decided to take on the task of completing it.</p>

    <p>
    Elements Of consist of an app that will be turned into a book as well as an app. The app will have many of the interviews from programmers and those who were a part of the making of the languages. There will also the languages that will be in the form of the periodic table and will be interactive.
    </p>
    <p>
    The book will go into depth about each language and also some of the interviews and what were some of the findings.
    </p>
    <p>As of right now, the data I am pulling I am still going through to make sure I have them all. There are about 200 languages missing from my initial list. I have plans to travel to the museum of computer history (https://computerhistory.org/) and The Tech Museum of Innovation (https://www.thetech.org/).
</p>
<p>
This project will take some time, the results for the year will be some of the interviews and at least 65% of the languages turned into the periodic table.
</p>
<p><small>-- Paula Bannerman</small><br/><small><a href="mailto:Pbannerman13@gmail.com">Pbannerman13@gmail.com</a></small></p>
<p></p>
    <h2>Inspired by</h2>
    <p>
    I want to bridge art and technology. I feel that showing the creation of programming languages can show how they brought their passion, their art piece to life to the point where other people use it to create so many things. Programming is more than just tech, it's just like creating any other piece of art, there are a struggle and emotions that go into it, and I want to shine a light on that.
    </p>

    <p>
    Bringing awareness can spark new curiosity, and with this project, it can inspire so many people to create more whether it is another language, art piece or software.
    </p>

    <h2>Audience</h2>
    <p>The intended audience is for those who attend STEM/STEAM festivals as well as schools, other artists anywhere educational, as well as for those who have an interest in technology and design.</p>
    {/* <p>I want to be able to show this in STEM/STEAM festivals as well as schools.</p> */}

    <h2>The importance of this project</h2>
    <p>
    Bringing awareness of languages could spark a revolution in building more software or creating art pieces through different languages. Many people don't know the magnitude of programming languages, and I would love to show that.
    </p>


	</div>
                <Time></Time>
                <h1>Future Plans</h1>
                <Future></Future>
        <h1>Sample Ideas</h1>
    <Images></Images>
        <h2>App/Book designs</h2>
    <div className="AppDisplay">
        <div>
            <p>App Design</p>
            <img src={AppDesign} className="ImageResized"/>
            </div>
            <div>
            
            <p>Web/Book Design</p>
            <img src={WebDeign} className="ImageResized"/>
            </div>
        </div>
        </div>
       
        );
    }
}

export default Proposal;