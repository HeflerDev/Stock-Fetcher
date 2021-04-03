import renderer from 'react-test-renderer';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from '../Navbar';

describe('when loading navbar', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Switch>
            <Navbar />
          </Switch>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
