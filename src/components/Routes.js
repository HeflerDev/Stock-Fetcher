import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import StockProfile from './StockProfile';
import Navbar from './Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/profile" component={StockProfile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
