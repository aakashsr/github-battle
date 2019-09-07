import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language
    });
  }

  render() {
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul class="flex-center">
        {languages.map(language => (
          <li key={language}>
            <button
              style={
                this.state.selectedLanguage === language
                  ? { color: "rgb(187,46,31)" }
                  : null
              }
              onClick={() => this.updateLanguage(language)}
              className="btn-clear nav-link"
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
