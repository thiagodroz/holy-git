import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__brand">
          Holy Git!
        </div>
        <div className="header__menu"></div>
      </header>
    );
  }
}