import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Popular extends Component {
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
