import React from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import "./index.css";
import Battle from "./components/Battle";
import { ThemeProvider } from "./context/theme";

class App extends React.Component {

  render() {
    return (
      <ThemeProvider value={}>
        <div className="container">
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
