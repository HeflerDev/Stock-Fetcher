import renderer from 'react-test-renderer';
import About from '../About';

describe('when loading the about page', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<About />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
