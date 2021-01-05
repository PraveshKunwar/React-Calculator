import React from "react";
import calculatorStyles from "./calc.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: "Output",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleClick(e) {
    this.setState({ output: e.target.innerHTML });
  }
  handleClear(e) {
    this.setState({ output: "Output" });
  }
  render() {
    return (
      <div className="calculator" style={calculatorStyles}>
        <div className="welcome-statement">
          <h1>React Calculator</h1>
          <p>A simple calculator made by Pravesh Kunwar.</p>
        </div>
        <div className="output">
          <div>
            <p>{this.state.output}</p>
          </div>
        </div>
        <div className="buttons">
          <div className="container-1">
            {[1, 2, 3].map((item) => {
              return <button onClick={this.handleClick}>{item}</button>;
            })}
          </div>
          <div className="container-2">
            {[4, 5, 6].map((item) => {
              return <button onClick={this.handleClick}>{item}</button>;
            })}
          </div>
          <div className="container-3">
            {[7, 8, 9].map((item) => {
              return <button onClick={this.handleClick}>{item}</button>;
            })}
          </div>
          <div className="container-4">
            <button>0</button>
            <button>=</button>
            <button>.</button>
          </div>
          <div className="clear-btn">
            <div>
              <button onClick={this.handleClear}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
