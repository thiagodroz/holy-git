import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './home/Home';
import Profile from './profile/Profile';
import About from './about/About';
import NotFound from './not-found/NotFound';

export default class RoutesComponent extends Component {
  pageView() {
    if (window.location.host === "holy-git.com") {
      ReactGA.pageview(window.location.hash);
    }
  }

  render() {
    return (
      <Router onUpdate={ this.pageView }>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/profiles/:profileName/" component={ Profile } />
          <Route path="/about/" component={ About } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}