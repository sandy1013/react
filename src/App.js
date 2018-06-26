import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from "./containers/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <Switch>
              <Route path="/home" component={HomePage} />
              <Redirect to="/home" />
      </Switch>
    );
  }
}

export default App;
