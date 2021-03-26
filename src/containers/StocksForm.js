import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import getApiUrl from '../logic/getApiUrl';
import { addResult, filterResult } from '../actions/index';

const select = (dispatch) => ({
  addResult: (result) => dispatch(addResult(result)),
  filterResult: (result) => dispatch(filterResult(result)),
});

const ConnectedStocksForm = ({ addResult, filterResult }) => {
  const [state, setState] = useState({
    queue: '',
    error: null,
    redirect: false,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length > 1) {
      const url = getApiUrl.search(value);
      fetch(url)
        .then((res) => {
          if (res.ok) { return res.json(); }
          throw new Error();
        })
        .then((data) => {
          filterResult(data);
        });
    }

    setState({
      queue: value,
      error: null,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = getApiUrl.profile(state.queue);
    fetch(url)
      .then((res) => {
        if (res.ok) { return res.json(); }
        throw new Error();
      })
      .then((data) => {
        addResult(data);
      })
      .then(() => {
        setState({
          queue: '',
          redirect: true,
        });
      })
      .catch(() => {
        setState({
          queue: state.queue,
          error: 'No results found in Search',
        });
      });
  };

  const err = state.error;
  const { redirect } = state;

  if (redirect) {
    return <Redirect to="profile" />;
  }
  return (
    <div className="stack">
      <form onSubmit={handleSubmit} className="board">
        <h2 className="col-12">Search for Symbol or Name</h2>
        <label htmlFor="acronym" className="col-12 col-m-9">
          <input type="text" className="queue" placeholder="AAPL" id="acronym" onChange={handleChange} />
        </label>
        <p>{ err }</p>
        <button type="submit" className="col-12 col-m-3">Search</button>
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
