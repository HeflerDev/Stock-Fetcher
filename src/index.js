import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import store from './store/index';
import reportWebVitals from './reportWebVitals';
import 'csstack';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
