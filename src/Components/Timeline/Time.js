import React, { Component } from 'react';
import { Fragment } from "react";
import { render } from "react-dom";

import { Timeline, Event } from "react-timeline-scribble";

class Time extends Component {
    render() {
        return (
            <Fragment>
            <h1>Elements timeline</h1>
            <Timeline>
              <Event interval={"2017 - 2018"} title={"Idea & data research"} subtitle={"The idea forms "}>
                <p>A simple idea for elements is formed, but really unsure how to go about it.</p>
                <p>DATA PULL</p>
                <p>The first data research using Python and Wikipedia API</p>
              </Event>
              <Event interval={"2019"} title={"Creation"} subtitle={"Creating the website"}>
                The website was created with only the information of some of the programming languages, using Node Js, React JS, and Python.
              </Event>
              <Event interval={"2020"} title={"First Grant"}>
                Applied for the first grant ever for Elements Of.
              </Event>
            </Timeline>
          </Fragment>
        );
    }
}

export default Time;