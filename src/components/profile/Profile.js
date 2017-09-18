import React, { Component } from 'react';

import Repository from '../repository/Repository';

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
  
  render() {
    return (
      <div>
        <h2>{ this.props.match.params.profileName }</h2>
        <ul>
          { this.renderRepositoryList() }
        </ul>
      </div>
    );
  }
}