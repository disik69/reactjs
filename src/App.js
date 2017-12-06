import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./Intro/Intro";
import Clock from "./Clock/Clock";

class App extends Component {
    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Clock />
                        <h1 className="App-title">Welcome to React</h1>
                        <Intro />
                    </header>
                </div>
        );
    }
}

export default App;
