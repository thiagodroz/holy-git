import React, { Component } from 'react';
import * as OhMyLib from 'oh-my-lib';
import './Profile.css';

import Repository from '../repository/Repository';
import Loader from '../loader/Loader';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.match.params,
      loading: true,
      profileRepositories: []
    };
  }

  componentDidMount() {
    const url = `https://api.github.com/users/${this.state.profileName}/repos`;

    fetch(url).then((response) => {
      response.json().then((data) => {
        if (response.ok) {
          this.setState({
            ...this.state,
            loading: false,
            profileRepositories: data,
            favoriteLanguage: OhMyLib.maxOccurrence(OhMyLib.extractProperty(data, 'language'))
          });
        } else {
          console.log(response);
          this.setState({
            ...this.state,
            loading: false,
            error: response.statusText
          });
        }
      });
    });
  }

  renderRepositoryList() {
    return this.state.profileRepositories.map((repository) => {
      return (
        <li key={ repository.id }>
          <Repository data={ repository } />
        </li>
      );
    });
  }

  renderPage() {
    const { error, favoriteLanguage } = this.state;
    return (
      <section className="profile">
        <div
          className={ `profile__header
             ${ error ? 'profile__header-error' : '' }
             ${ favoriteLanguage || '' }` }>
          { error || `${ this.props.match.params.profileName } loves ${ favoriteLanguage }` }
        </div>
        <ul className="profile__list">
          { this.renderRepositoryList() }
        </ul>
      </section>
    );
  }

  render() {
    return (
      <div>
        { this.state.loading ? <Loader /> : this.renderPage() }
      </div>
    );
  }
}