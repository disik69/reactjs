/**
 * Created by disik on 12/5/17.
 */
import React, {Component} from "react";
import "./Intro.css";

export default class Intro extends Component {
    parentElement = React.createElement("div", {}, this.getIntro(), React.createElement("p", {className: "article"}, "Article"));

    getIntro() {
        return (
                <p className="App-intro">
                    My name is {this.props.user.firstName} {this.props.user.lastName}!
                </p>

        );
    }

    render() {
        return this.parentElement;
    }
}

