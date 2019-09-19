import React from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import './index.css';
import Battle from "./components/Battle";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
