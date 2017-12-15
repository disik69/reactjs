/**
 * Created by disik on 12/15/17.
 */
import React, {Component} from "react";

export default class Indicator extends Component {
    render() {
        let style = {color: "black"};

        if (this.props.increment === 10) {
            style.color = "green";
        } else if (this.props.increment === 20) {
            style.color = "blue";
        } else if (this.props.increment === 30) {
            style.color = "red";
        } else {
            style.color = "black";
        }


        return (
              <span style={style}>{this.props.counter}</span>
        );
    }
}
