import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All"
    };
  }

  render() {
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul class="flex-center">
        {languages.map(language => (
          <li key={language}>
            <button className="btn-clear nav-link">{language}</button>
          </li>
        ))}
      </ul>
    );
  }
}
