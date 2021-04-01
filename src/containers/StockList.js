import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';

const mapStateToProps = (state) => ({
  filter: state.filterReducer,
});

const ConnectedStockList = ({ filter }) => (filter ? (
  <div className="stack">
    {
        filter.map((stock) => (
          <Link
            to={stock.symbol}
            tabIndex={0}
            role="button"
            key={stock.symbol}
          >
            <Stock stock={stock} />
          </Link>
        ))
        }
  </div>
) : (
  <div>
    Results Will be Shown Bellow.
  </div>
));

ConnectedStockList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.object),
};

ConnectedStockList.defaultProps = {
  filter: [{}],
};

const StockList = connect(mapStateToProps)(ConnectedStockList);

export default StockList;
