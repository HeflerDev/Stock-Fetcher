import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addResult } from '../actions/index';
import Stock from '../components/Stock';
import getApiUrl from '../logic/getApiUrl';

const select = (dispatch) => ({
  addResult: (result) => dispatch(addResult(result)),
});

const mapStateToProps = (state) => ({
  filter: state.filterReducer,
});

const ConnectedStockList = ({ filter, addResult }) => {
  const history = useHistory();
  const handleClick = (symbol) => {
    const url = getApiUrl.profile(symbol);

    fetch(url)
      .then((res) => {
        if (res.ok) { return res.json(); }
        throw new Error();
      })
      .then((data) => {
        addResult(data);
      })
      .then(() => {
        history.push('./profile');
      });
  };

  const intercalate = (index) => {
    if (index % 2 === 0) {
      return 'stock-container';
    }
    return 'stock-odd-container';
  };

  return (
    <div className="stack">
      {
      filter.map((stock, index) => (
        <div
          tabIndex={0}
          onKeyDown={() => handleClick(stock.symbol)}
          role="button"
          key={stock.symbol}
          className={intercalate(index)}
          onClick={() => handleClick(stock.symbol)}
        >
          <Stock stock={stock} />
        </div>
      ))
    }
    </div>
  );
};

ConnectedStockList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.object),
  addResult: PropTypes.func.isRequired,
};

ConnectedStockList.defaultProps = {
  filter: [{}],
};

const StockList = connect(mapStateToProps, select)(ConnectedStockList);

export default StockList;
