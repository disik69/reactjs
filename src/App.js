import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./Intro/Intro";
import Clock from "./Clock/Clock";

class App extends Component {
    buttons = [];

    onClickButton = (event, increment) => {
        this.setState({increment: increment});
        this.resetButtonFontWeight();
        event.target.style.fontWeight = 900;
    };

    resetButtonFontWeight() {
        this.buttons.forEach((button) => button.style.fontWeight = 400);
    }

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
                        <input ref={(button) => this.buttons[0] = button} type="button" value="10" onClick={(event) => this.onClickButton(event, 10)} />
                        <input ref={(button) => this.buttons[1] = button} type="button" value="20" onClick={(event) => this.onClickButton(event, 20)} />
                        <input ref={(button) => this.buttons[2] = button} type="button" value="30" onClick={(event) => this.onClickButton(event, 30)} />
                        <h1 className="App-title">Welcome to React</h1>
                        <Intro user={this.state.user} />
                    </header>
                </div>
        );
    }
}

export default App;
