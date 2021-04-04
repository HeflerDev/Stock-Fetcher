import renderer from 'react-test-renderer';
import Stock from '../Stock';

describe('when loading stock', () => {
  const mockProp = {
    symbol: 'symbol',
    name: 'name',
    currency: 'currency',
    exchangeShortName: 'ShortName',
  };

  test('it render correctly', () => {
    const tree = renderer
      .create(<Stock stock={mockProp} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
