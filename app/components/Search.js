import React, { Component } from "react";
import { ThemeConsumer } from "../contexts/theme";

export default class Search extends Component {
  state = {
    userName: ""
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div>
            <h1 className="center-text header-lg">Instructions</h1>
            <div className="row player-inputs">
              <input
                type="text"
                id="username"
                className={`input-${theme}`}
                placeholder="github username"
                autoComplete="off"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <button
                className={`btn ${theme === "dark" ? "light-btn" : "dark-btn"}`}
                type="submit"
                disabled={!this.state.username}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}
