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
    this.setState({
      ...this.state,
      menuIsOpen: true
    });
  }

  onCloseMenu() {
    this.setState({
      ...this.state,
      menuIsOpen: false
    });
  }

  render() {
    const { menuIsOpen } = this.state;

    return (
      <header className="header">
        <div className="header__brand">
          Holy Git!
        </div>
        <div className="header__menu" onClick={ !menuIsOpen && this.onMenuClick }>
          <i className="material-icons">menu</i>
          <Menu isOpen={ menuIsOpen } closeMenu={ this.onCloseMenu } />
        </div>
      </header>
    );
  }
}