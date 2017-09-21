import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.setMenuRef = this.setMenuRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setMenuRef(node) {
    this.menuRef = node;
  }

  handleClickOutside(event) {
    const { closeMenu, isOpen } = this.props;

    if (isOpen && this.menuRef && !this.menuRef.contains(event.target)) {
      setTimeout(() => {
        closeMenu();
      }, 100);
    }
  }

  render() {
    return (
      <nav
        className={ `header-menu__nav ${ this.props.isOpen ? 'header-menu__nav-open' : '' }` }
        ref={ this.setMenuRef }>
          <ul className="header-menu__list">
            <li className="header-menu__element">
              <a href="/" className="header-menu__link">Home</a>
            </li>
            <li className="header-menu__element">
              <a href="/about" className="header-menu__link">About</a>
            </li>
          </ul>
      </nav>
    );
  }
}