import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import store from './store/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
