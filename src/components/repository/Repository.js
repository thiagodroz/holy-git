import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RepositoryDetail from './RepositoryDetail';
import language from './Languages';
import './Repository.css';
import './Languages.css';

export default class Repository extends Component {
  constructor(props) {
    super(props);

    this.toggleRepository = this.toggleRepository.bind(this);

    this.state = { repositoryIsOpened: false };
  }

  toggleRepository() {
    this.setState({
      repositoryIsOpened: !this.state.repositoryIsOpened
    });
  }

  render() {
    const repository = this.props.data;

    if (!repository) {
      return null;
    }

    return (
      <div>
        <div className="repository" onClick={ this.toggleRepository }>
          <i className={ `repository__language-icon ${ language(repository.language) }` }></i>
          <h3 className="repository__name">{ repository.name }</h3>
        </div>
        <RepositoryDetail repository={ repository } isOpened={ this.state.repositoryIsOpened } />
      </div>
    );
  }
}

Repository.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    language: PropTypes.string
  }).isRequired
}