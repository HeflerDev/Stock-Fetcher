import React from 'react';
import StocksForm from '../containers/StocksForm';
import StockList from '../containers/StockList';
import StockStatistics from '../containers/StockStatistics';

const App = () => (
  <div className="board">
    <div className="col-12 col-l-3">
      <StockStatistics />
    </div>
    <div className="col-12 col-l-9">
      <StocksForm />
      <StockList />
    </div>
  </div>
);

export default App;
