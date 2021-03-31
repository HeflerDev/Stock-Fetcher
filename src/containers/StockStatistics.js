/* eslint-disable */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { calcActives, calcGainers, calcLosers } from '../actions/index';
import getApiUrl from '../logic/getApiUrl';
import Statistics from '../components/Statistics';

const select = (dispatch) => ({
  calcActives: (actives) => dispatch(calcActives(actives)),
  calcGainers: (gainers) => dispatch(calcGainers(gainers)),
  calcLosers: (losers) => dispatch(calcLosers(losers)),
});

const mapStateToProps = (state) => ({
  statistics: state.statisticsReducer,
});

const ConnectedStockStatistics = ({ statistics, calcActives, calcGainers, calcLosers }) => {
  const [actives, setActives] = useState(false);
  const [gainers, setGainers] = useState(false);
  const [losers, setLosers] = useState(false);

  useEffect(() => {
    fetch(getApiUrl.actives())
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Couldn\'t Fetch Actives');
      }).then((data) => {
        calcActives(data);
        setActives(true);
      });

    fetch(getApiUrl.gainers())
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Couldn\'t Fetch Gainers');
      }).then((data) => {
        calcGainers(data);
        setGainers(true);
      });

    fetch(getApiUrl.losers())
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Couldn\'t Fetch Losers');
      }).then((data) => {
        calcLosers(data);
        setLosers(true);
      });
  }, []);

  const showStatistics = type => {
    if (actives && gainers && losers) {
      return statistics[type].map((item) => (
        <div key={item.ticker}>
          <Statistics statistics={item} />
        </div>
      ))
    };
    return (
      <div className="queue center">
        <p>Loading Stocks...</p>
      </div>
    )
  }

  return (
    <div className="stack statistics-container">
      <h3>Actives</h3>
      { showStatistics("actives") }
      <h3>Top Gainers</h3>
      { showStatistics("gainers") }
      <h3>Top Losers</h3>
      { showStatistics("losers") }
    </div>
  );
};

ConnectedStockStatistics.propTypes = {
  calcActives: PropTypes.func.isRequired,
  calcGainers: PropTypes.func.isRequired,
  calcLosers: PropTypes.func.isRequired,
};

const StockStatistics = connect(mapStateToProps, select)(ConnectedStockStatistics);

export default StockStatistics;
