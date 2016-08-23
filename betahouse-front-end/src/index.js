import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './components/Main';
import Index from './components/Index';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('application'));

let reactNode = document.getElementById('application');

if (reactNode) {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Index} />
      </Route>
    </Router>
  , reactNode)
}
