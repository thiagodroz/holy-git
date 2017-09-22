import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="loader-shadow"></div>
        <div className="loader-box"></div>
      </div>
    );
  }
}