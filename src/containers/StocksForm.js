/* eslint-disable */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import magnifyingGlass from '@iconify-icons/foundation/magnifying-glass';
import { Redirect } from 'react-router-dom';
import getApiUrl from '../logic/getApiUrl';
import { addResult, filterResult } from '../actions/index';

const select = (dispatch) => ({
  addResult: (result) => dispatch(addResult(result)),
  filterResult: (result) => dispatch(filterResult(result)),
});

const ConnectedStocksForm = ({ addResult, filterResult }) => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [query, setQuery] = useState(null);
  const [queryData, setQueryData] = useState(null);

  useEffect(() => {
    async function fetchStocksData(query) {
      await fetch(getApiUrl.search(query))
        .then((res) => res.json())
        .then((data) => {
          setQueryData(data)
          filterResult(queryData);
        });
    }
    if (query) {
      fetchStocksData(query);
    }
  }, [query])

  return (
    <div className="stack">
      <form className="board">
        <h2 className="col-12">Search for Symbol or Name</h2>
        <label htmlFor="acronym" className="col-12 col-m-9">
          <input type="text" className="queue" placeholder="AAPL" id="acronym" onChange={(event) => setQuery(event.target.value)} />
        </label>
        <button type="submit" className="col-12 col-m-3"><Icon icon={magnifyingGlass} /></button>
      </form>
    </div>
  );
};

ConnectedStocksForm.propTypes = {
  addResult: PropTypes.func.isRequired,
  filterResult: PropTypes.func.isRequired,
};

const StocksForm = connect(null, select)(ConnectedStocksForm);

export default StocksForm;
