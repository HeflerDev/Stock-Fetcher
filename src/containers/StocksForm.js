import React, { useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const ConnectedStocksForm = props => {
  const apiKey = 'd6565ee0950c8e6ff7fb16a02ee37ca6';
  const [state, setState] = useState({
    queue: '',
    data: {},
  });

  const handleChange = event => {
    setState({
      queue: event.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="stack">
        <h2>Input Data</h2>
        <label htmlFor="acronym">
          <input type="text" placeholder="AAPL" id="acronym" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );

};

const StocksForm = connect(null)(ConnectedStocksForm);

export default StocksForm;
