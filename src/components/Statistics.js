/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ statistics }) => {
  console.log(statistics)
  const {
    ticker,
    changes,
    price,
    changesPercentage,
    companyName,
  } = statistics;

  return (
    <div className="board statistics">
      <div className="queue between">
        <div>{ ticker }</div>
        <div>{ companyName }</div>
      </div>
      <div className="queue center">
        <p>Price: { price }</p>
      </div>
    <div className="queue around">
        <p>Changes: { changes }</p>
        <p>Percentage %: { changesPercentage }</p>
      </div>
    </div>
  );
}

export default Statistics;
