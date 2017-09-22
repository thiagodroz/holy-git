import React, { Component } from 'react';
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
        this.setState({
          ...this.state,
          loading: false,
          profileRepositories: data
        });
      });
    }).catch((error) => {
      this.setState({
        ...this.state,
        loading: false
      })
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
    return (
      <section className="profile">
        <div className="profile__header">
          { this.props.match.params.profileName }
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