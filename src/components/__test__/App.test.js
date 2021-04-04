// import { configure, shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import testRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../../store/index';

// configure({ adapter: new Adapter() });

describe('when loading the page', () => {
  const mockComp = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  it('renders accordingly', () => {
    const tree = testRenderer
      .create(mockComp)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
