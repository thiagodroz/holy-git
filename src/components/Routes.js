import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Profile from './profile/Profile';
import NotFound from './not-found/NotFound';

export default class RoutesComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/profiles/:profileName/" component={ Profile } />
                    <Route path="*" component={ NotFound } />
                </Switch>
            </Router>
        );
    }
}