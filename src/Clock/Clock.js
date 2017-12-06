/**
 * Created by disik on 12/6/17.
 */
import React, {Component} from "react";
import "./Clock.css";

export default class Clock extends Component {
    render() {
        return (
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        );
    }
}