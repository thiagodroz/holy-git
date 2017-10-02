import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';

import  Header from './components/header/Header';
import  Routes from './components/Routes';

class App extends Component {
  componentWillMount() {
    if (window.location.host === "holy-git.com") {
      ReactGA.initialize('UA-107122068-1');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
