import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Link
} from 'react-router-dom'

import Counter from './containers/Counter'
import ReduxCounter from './containers/ReduxCounter'
import ContextCounter from './containers/ContextCounter'

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Link className="link" to="/">simple counter</Link>
          <Link className="link" to="/redux">redux counter</Link>
          <Link className="link" to="/context">context counter</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/redux" component={ReduxCounter} />
          <Route path="/context" component={ContextCounter} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
