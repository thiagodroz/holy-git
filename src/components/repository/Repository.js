import React, { Component } from 'react';
import language from './Languages';
import './Repository.css';

export default class Repository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repository: this.props.data
    };
  }

  render() {
    const repository = this.state.repository;

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