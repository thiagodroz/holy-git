import React, { Component } from 'react';
import './App.css';

import  Header from './components/header/Header';
import  Routes from './components/Routes';

class App extends Component {
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
