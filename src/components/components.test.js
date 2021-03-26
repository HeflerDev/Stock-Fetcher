import React from 'react';
import 'react-router-dom';
import renderer from 'react-test-renderer';
import Stock from './Stock';
import getApiUrl from '../logic/getApiUrl';

it('renders Stock Correctly', () => {
  const tree = renderer
    .create(<Stock stock={
      {
        symbol: 'AAPL',
        name: 'Apple',
        currency: 'USD',
        exchangeShortName: 'NASDAQ',
      }
    }
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('when rendering the page', () => {
  const url = getApiUrl.profile('AAPL');
  async function getProfileObj() {
    return fetch(url)
      .then((res) => {
        if (res.ok) { return res.json(); }
        throw new Error();
      })
      .then((data) => data);
  }
  it('somting', async () => {
    expect.assertions(1);
    const [data] = await getProfileObj();
    expect(typeof data).toBe('object');
  });
});
