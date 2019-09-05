import React from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";

class App extends React.Component {
  render() {
    return <Popular />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
