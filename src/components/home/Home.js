import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false, userName: '' };
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    this.setState({
      ...this.state,
      redirect: true
    });
  }

  onInputChange(event) {
    this.setState({
      ...this.state,
      userName: event.target.value
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={ '/profiles/' + this.state.userName } />;
    }

    return (
      <div>
        <form id="profile-search" className="profile-search" onSubmit={ this.onFormSubmit.bind(this) }>
          <input type="text"
                 className="profile-search__input"
                 value={ this.state.userName }
                 onChange={ this.onInputChange.bind(this) } />
          <button type="submit" className="profile-search__button">Search</button>
        </form>
      </div>
    );
  }
}