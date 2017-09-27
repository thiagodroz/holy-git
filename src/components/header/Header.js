import React, { Component } from 'react';
import './Header.css';

import Menu from './Menu';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false
    };

    this.onMenuClick = this.onMenuClick.bind(this);
    this.onCloseMenu = this.onCloseMenu.bind(this);
  }

  onMenuClick() {
    if (!this.state.menuIsOpen) {
      this.setState({
        ...this.state,
        menuIsOpen: true
      });
    }
  }

  onCloseMenu() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        menuIsOpen: false
      });
    }, 100);
  }

  render() {
    const { menuIsOpen } = this.state;

    return (
      <header className="header">
        <a href="/" className="header__brand">
          Holy Git!
        </a>
        <div className="header__menu" onClick={ this.onMenuClick }>
          <i className="material-icons">menu</i>
          <Menu isOpen={ menuIsOpen } closeMenu={ this.onCloseMenu } />
        </div>
      </header>
    );
  }
}