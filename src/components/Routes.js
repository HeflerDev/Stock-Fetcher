import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import StockProfile from './StockProfile';
import Navbar from './Navbar';
import About from './About';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/profile" component={StockProfile} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
