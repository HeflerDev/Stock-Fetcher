import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({ stock }) => {
  const {
    symbol,
    name,
    currency,
    stockExchange,
    exchangeShortName,
  } = stock;

  return (
    <div className="stack">
      <ul className="board">
        <li className="col-12 big">
          <div>{ name }</div>
        </li>
        <li className="col-3">
          <div>{ symbol }</div>
        </li>
        <li className="col-3">
          <div>{ currency }</div>
        </li>
        <li className="col-3">
          { stockExchange }
        </li>
        <li className="col-3">
          { exchangeShortName }
        </li>
      </ul>
    </div>
  );
};

Stock.propTypes = {
  stock: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string,
    currency: PropTypes.string.isRequired,
    stockExchange: PropTypes.string,
    exchangeShortName: PropTypes.string,
  }).isRequired,
};

Stock.defaultProps = {
  stock: {
    name: 'None',
  },
}

export default Stock;
