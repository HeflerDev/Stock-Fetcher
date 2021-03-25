import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addResult } from '../actions/index';
import Stock from '../components/Stock';
import getApiUrl from '../logic/getApiUrl';

const select = dispatch => ({
  addResult: (result) => dispatch(addResult(result)),
});

const mapStateToProps = state => ({
  filter: state.filterReducer,
});


const ConnectedStockList = ({ filter, addResult }) => {
  const history = useHistory();
  const handleClick = (symbol) => {
    const url = getApiUrl.profile(symbol);
    
    fetch(url)
      .then(res => {
        if (res.ok) { return res.json() }
        throw new Error();
      })
      .then(data => {
        addResult(data);
      })
      .then(() => {
        history.push('./profile');
      });
  }

  return (
  <> 
    {
      filter.map((stock) => (
        <div key={stock.symbol} onClick={() => handleClick(stock.symbol)}>
          <Stock stock={stock} />
        </div>
      ))
    }
  </>
  );
};

const StockList = connect(mapStateToProps, select)(ConnectedStockList);

export default StockList;
