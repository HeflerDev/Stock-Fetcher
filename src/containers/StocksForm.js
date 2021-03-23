import React, { useState } from 'react';
import { connect } from 'react-redux';
import getApiUrl from '../logic/getApiUrl';
import { addResult, filterResult } from '../actions/index';

const select = dispatch => ({
  addResult: result => dispatch(addResult(result)),
  filterResult: result => dispatch(filterResult(result)),
});

const ConnectedStocksForm = ({ addResult, filterResult }) => {
  const [state, setState] = useState({
    queue: '',
    error: null,
  });

  const handleChange = event => {
    const value = event.target.value;
    if (value.length > 1) {
      const url = getApiUrl.search(value);
      fetch(url)
        .then(res => {
          if (res.ok) { return res.json() }
          throw new Error();
        })
        .then(data => {
          filterResult(data);
        });
    }
    
    setState({
      queue: value,
      error: null,
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const url = getApiUrl.profile(state.queue);
    fetch(url)
      .then(res => {
        if (res.ok) { return res.json() }
        throw new Error();
      })
      .then(data => {
        addResult(data);
        setState({
          queue:'',
        })
      })
      .catch(() => {
        setState({
          queue: state.queue,
          error: 'No results found in Search',
        });
      });
  }

  const err = state.error;
  return (
    <>
      <form onSubmit={handleSubmit} className="stack">
        <h2>Manual Input</h2>
        <label htmlFor="acronym">
          <input type="text" placeholder="AAPL" id="acronym" onChange={handleChange} />
        </label>
        <p>{ err }</p>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

const StocksForm = connect(null, select)(ConnectedStocksForm);

export default StocksForm;
