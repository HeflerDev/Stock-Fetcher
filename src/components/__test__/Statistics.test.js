import renderer from 'react-test-renderer';
import Statistics from '../Statistics';

describe('when loading statistics', () => {
  const mockProp = {
    ticker: '0',
    changes: 0,
    price: '1.0',
    changesPercentage: '%',
    companyName: 'Test',
  };

  it('render statistic correctly', () => {
    const tree = renderer
      .create(<Statistics statistics={mockProp} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
