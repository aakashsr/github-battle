import React, { Component } from "react";
import ReactDOM from "react-dom";

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="flex-center">
      {languages.map(language => (
        <li key={language}>
          <button
            style={selected === language ? { color: "rgb(187,46,31)" } : null}
            onClick={() => onUpdateLanguage(language)}
            className="btn-clear nav-link"
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

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
    const { selectedLanguage } = this.state;
    return (
      <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={this.updateLanguage}
      />
    );
  }
}
