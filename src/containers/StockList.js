import { connect } from 'react-redux';
import Stock from '../components/Stock';

const mapStateToProps = state => ({
  filter: state.filterReducer,
});

const ConnectedStockList = ({ filter }) => (
  <> 
    {
      filter.map(stock => (
        <div key={stock.symbol}>
          <Stock stock={stock} />
        </div>
      ))
    }
  </>
)

const StockList = connect(mapStateToProps)(ConnectedStockList);

export default StockList;
