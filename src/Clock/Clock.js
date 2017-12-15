/**
 * Created by disik on 12/6/17.
 */
import React, {Component} from "react";
import "./Clock.css";

export default class Clock extends Component {
    constructor(props) {
        // properties
        super(props);

        // states
        this.state = {
            date: new Date(),
            counter: 0
        };
    }

    /**
     * Lifecycle
     */
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        // each state was merged by set
        this.setState({
            date: new Date()
        });

        // arrow returns state because properties and states were changed asynchronously
        this.setState((prevState, props) => ({
           counter: prevState.counter + props.increment
        }));
    }

    render() {
        return (
            <h2>It is {this.state.date.toLocaleTimeString()}. Counter is {this.state.counter}</h2>
        );
    }
}