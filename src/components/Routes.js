import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import StockProfile from '../containers/StockProfile';
import Navbar from './Navbar';
import About from './About';
import Header from './Header';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={StockProfile} />
    </Switch>
    <Switch>
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
