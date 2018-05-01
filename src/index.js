import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Routes from './routes';

// create store and wrapped history
const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>,
document.getElementById('main'));