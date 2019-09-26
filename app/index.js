import React from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import "./index.css";
import Battle from "./components/Battle";
import { ThemeProvider } from "./context/theme";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => {
          theme: theme === "light" ? "dark" : "light";
        });
      }
    };
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
