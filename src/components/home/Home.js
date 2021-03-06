import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      redirect: false,
      userName: '',
      error: false
    };
  }

  onFormSubmit(event) {
    event.preventDefault();

    if (this.state.userName) {
      this.setState({
        ...this.state,
        redirect: true,
        error: false
      });
    } else {
      this.setState({
        ...this.state,
        error: true
      });
    }
  }

  onInputChange(event) {
    this.setState({
      ...this.state,
      userName: event.target.value
    });
  }

  render() {
    const { redirect } = this.state;
    const errorClass = this.state.error ? 'profile-search__input-error' : '';

    if (redirect) {
      return <Redirect to={ '/profiles/' + this.state.userName } />;
    }

    return (
      <div>
        <form id="profile-search" className="profile-search" onSubmit={ this.onFormSubmit }>
          <input type="text"
                 className={ 'profile-search__input ' + errorClass }
                 placeholder="Github username"
                 value={ this.state.userName }
                 onChange={ this.onInputChange } />
          <button type="submit" className="profile-search__button">Search</button>
        </form>
      </div>
    );
  }
}