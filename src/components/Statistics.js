import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ statistics }) => {
  const {
    ticker,
    changes,
    price,
    changesPercentage,
    companyName,
  } = statistics;

  const checkStatus = () => {
    if (changes >= 0) {
      return 'green';
    }
    return 'red';
  };

  return (
    <div className="board statistics">
      <div className="queue between stock-header">
        <div>{ ticker }</div>
        <div>{ companyName }</div>
      </div>
      <div className="queue center">
        <p>
          Price:
          { price }
        </p>
      </div>
      <div className="queue around">
        <p className={checkStatus()}>
          Changes:
          { changes }
        </p>
        <p className={checkStatus()}>
          Percentage %:
          { changesPercentage }
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    changesPercentage: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Statistics;
