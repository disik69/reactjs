import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./Intro/Intro";
import Clock from "./Clock/Clock";

class App extends Component {
    onClickButton = (increment) => {
        this.setState({increment: increment});
    };


    constructor(props) {
        super(props);

        this.state = {
            increment: 10,
            user: {
                firstName: "Igor",
                lastName: "Demchenko"
            }
        };
    }

    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <Clock increment={this.state.increment} />
                        <input type="button" value="10" onClick={(event) => this.onClickButton(10)} />
                        <input type="button" value="20" onClick={(event) => this.onClickButton(20)} />
                        <input type="button" value="30" onClick={(event) => this.onClickButton(30)} />
                        <h1 className="App-title">Welcome to React</h1>
                        <Intro user={this.state.user} />
                    </header>
                </div>
        );
    }
}

export default App;
