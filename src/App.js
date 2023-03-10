import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "John", lastName: "Pendergrass" },
      company: "ThriveDX",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I'm {this.state.name.firstName} {this.state.name.lastName} and I
            work at {this.state.company}!
          </p>

          <button
            onClick={() => {
              this.setState(() => {
                return {
                  name: { firstName: "Darryl", lastName: "Marler" },
                  company: "CEVA Logistics",
                };
              },
              () => {
                console.log(this.state)
              }
              );
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
