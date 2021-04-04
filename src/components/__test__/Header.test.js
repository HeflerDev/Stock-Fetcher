import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('when loading page', () => {
  const wrapper = shallow(<Header />);
  const tree = renderer
    .create(<Header />)
    .toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('has header', () => {
    expect(wrapper.contains(<p>Progress</p>)).toEqual(true);
  });
});
