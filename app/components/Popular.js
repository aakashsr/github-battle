import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle
} from "react-icons/fa";
import Battle from "./Battle";
import Card from "./Card";
import Loading from "./Loading";
import Tooltip from "./Tooltip";

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

function ReposGrid({ repos }) {
  console.log(repos);
  return (
    <ul className="grid space-around">
      {repos.map((repo, index) => {
        // Maping over each repo and displaying it as a card
        const {
          id,
          name,
          owner,
          html_url,
          stargazers_count,
          forks,
          open_issues
        } = repo;
        const { login, avatar_url } = owner;

        return (
          <li key="id">
            <Card
              header={`#${index + 1}`}
              avatar={avatar_url}
              href={html_url}
              name={login}
            >
              <ul className="card-list">
                <li>
                  <Tooltip text="Github username">
                    <FaUser color="rgb(255,191,116)" size={22} />
                    <a href={"https://github.com/${login"}>{login}</a>
                  </Tooltip>
                </li>
                <li>
                  <FaStar color="rgb(255, 215, 0)" size={22} />
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                  {forks.toLocaleString()} forks
                </li>
                <li>
                  <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
                  {open_issues.toLocaleString()} open
                </li>
              </ul>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

export default class Popular extends Component {
  state = {
    selectedLanguage: "All",
    repos: {},
    error: null // Set the state of error to 'null'
  };

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = selectedLanguage => {
    this.setState({
      selectedLanguage, // Update the state of selectedLanguage ASA user clicks on button.
      error: null
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then(data => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data
            }
          }));
        })
        .catch(() => {
          console.warn("Error fetching repos: ", error); // If there is any error in fetching data or resolving promises , catch() will will executed and error will be shown

          this.setState({
            error: "There was an error fetching repos." // When error occurred , update the state of 'error' with some message.
          });
        });
    }
  };

  isLoading = () => {
    const { selectedLanguage, repos, error } = this.state;
    return !repos[selectedLanguage] && error === null;
  };

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
          isLoading={this.isLoading}
        />
        {this.isLoading() && <Loading text="Fetching Repos" />}
        {error && <p className="center-text error">{error}</p>}
        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
  }
}
