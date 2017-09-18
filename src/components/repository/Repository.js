import React, { Component } from 'react';

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
      <div>
        <h3>{ repository.name }</h3>
        <span>{ repository.language }</span>
      </div>
    );
  }
}