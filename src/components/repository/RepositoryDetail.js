import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RepositoryDetail.css';

export default class RepositoryDetail extends Component {
  renderDetailBoxes() {
    const { repository } = this.props;

    return [
      { key: "Name", value: repository.name },
      { key: "Language", value: repository.language },
      { key: "Size", value: `${ repository.size } KB` }
    ].map((box) => {
      return (
        <div className="repository-detail__box" key={ box.key }>
          <label className="repository-detail__key">{ box.key }: </label>
          <div className="repository-detail__value">{ box.value }</div>
        </div>
      );
    })
  }

  render() {
    const { isOpened } = this.props;

    return (
      <div className={ `repository-detail ${ isOpened ? 'open' : '' }` }>
        { this.renderDetailBoxes() }
      </div>
    );
  }
}

RepositoryDetail.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    language: PropTypes.string
  }).isRequired,
  isOpened: PropTypes.bool.isRequired
}