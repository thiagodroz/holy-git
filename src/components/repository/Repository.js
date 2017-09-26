import React, { Component } from 'react';
import PropTypes from 'prop-types';
import language from './Languages';
import './Repository.css';
import './Languages.css';

export default class Repository extends Component {
  render() {
    const repository = this.props.data;

    if (!repository) {
      return null;
    }

    return (
      <div className="repository">
        <i className={ `repository__language-icon ${language(repository.language)}` }></i>
        <h3 className="repository__name">{ repository.name }</h3>
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