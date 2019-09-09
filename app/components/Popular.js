import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";

function LanguagesNav({ selected, onUpdateLanguage, isLoading }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="flex-center">
      {languages.map(language => (
        <li key={language}>
          <button
            style={selected === language ? { color: "rgb(187,46,33)" } : null}
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

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
};

export default class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      error: null, // Set the state of error and repos to 'null'
      repos: {}
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage: selectedLanguage, // Update the state of selectedLanguage ASA user clicks on button.
      error: null,
      repos: null // ASA user clicks on button , set the state of 'error' and 'repos' again to 'null' so that we can show some message like "loading" to the user
      // until the data get fetched.
    });

    fetchPopularRepos(selectedLanguage)
      .then(repos =>
        this.setState({
          repos: repos, // When the repositories are available , update the state of 'repos' to repos and set 'error' to 'null'
          error: null
        })
      )
      .catch(() => {
        console.log("Error fetching repos", error); // If there is any error in fetching data or resolving promises , catch() will will executed and error will be shown

        this.setState({
          error: "There was an error fetching repos." // When error occurred , update the state of 'error' with some message.
        });
      });
  }

  isLoading() {
    return this.state.repos === null && this.state.error === null;
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
          isLoading={this.isLoading}
        />
        {this.isLoading() && <p>LOADING.....</p>}
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </React.Fragment>
    );
  }
}
