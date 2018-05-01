import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { HelloWorld } from './views/HelloWorld';

import baseHistory from './history';
import './styles/style.styl';

export default props => (
  <Router history={history}>
    <Route path="/" component={HelloWorld} />
  </Router>
);