import React, { Component } from 'react';
import { Fragment } from "react";
import { render } from "react-dom";

import { Timeline, Event } from "react-timeline-scribble";

class Future extends Component {
    render() {
        return (
            <Fragment>
            {/* <h1>Future Plans</h1> */}
            <Timeline>
              <Event interval={"July 2020"} title={"Equipment and Interview Starting Process"} subtitle={"The idea forms "}>
              Purchasing of camera equipment for research and interviews
              </Event>
              <Event interval={"Mid-July to Sept 2020"} title={"Interviews & Research Travel"}>
              Interview first historians
First trip to the museums (museum of computer history (https://computerhistory.org/) and The Tech Museum of Innovation (https://www.thetech.org/))
The beginning process of Elements turned into the periodical table
              </Event>
              <Event interval={"October 2020"} title={"Second Round of Interviews"}>
              Second round Interviews
              </Event>
              <Event interval={"February 2021"} title={"Research Travel"}>
              Second trip to museum of computer history (https://computerhistory.org/) and The Tech Museum of Innovation (https://www.thetech.org/) if needed or meeting creators of the programming language
              </Event>
              <Event interval={"March 2021"} title={"First Book Print"}>
              The first print of the Elements book, will not be the final finished, but the first round of languages.
              </Event>
              <Event interval={"May-June 2021"} title={"Ending Phase one"}>
              Third round of interviews
Estimated elements turned into the periodical table is 60%
              </Event>
            </Timeline>
          </Fragment>
        );
    }
}

export default Future;