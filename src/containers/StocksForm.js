import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import magnifyingGlass from '../assets/icons/magnifying-glass.svg';
import getApiUrl from '../logic/getApiUrl';
import { addResult, filterResult } from '../actions/index';

const select = (dispatch) => ({
  addResult: (result) => dispatch(addResult(result)),
  filterResult: (result) => dispatch(filterResult(result)),
});

const ConnectedStocksForm = ({ filterResult }) => {
  const [error, setError] = useState([]);
  const [query, setQuery] = useState(null);
  const [queryData, setQueryData] = useState(null);
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    async function fetchStocksData(query) {
      await fetch(getApiUrl.search(query))
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Can\'t Connect to Server');
        })
        .then((data) => {
          if (data.length > 0) {
            setQueryData(data);
            filterResult(queryData);
            setValidation(true);
          } else {
            setQueryData(null);
            filterResult([]);
            setValidation(false);
          }
        })
        .catch((err) => setError([...error, err.message]));
    }

    const asyncFunctionDebounced = AwesomeDebouncePromise(
      fetchStocksData,
      500,
    );

    if (query) {
      asyncFunctionDebounced(query);
    }
  }, [query]);

  const switchLink = () => (validation ? (
    <Link to={query} className="queue center col-12 col-m-3 search-button">
      <img src={magnifyingGlass} alt="Search" />
    </Link>
  ) : (
    <div className="queue center col-12 col-m-3 disabled">
      <img src={magnifyingGlass} alt="Search" />
    </div>
  ));

  if (error.length > 0) {
    return (
      <div className="stack">
        {
          error.map((item) => (
            <p className="error-msg" key="item">{ item }</p>
          ))
        }
      </div>
    );
  }
  return (
    <div className="stack">
      <form className="board">
        <h2 className="col-12">Search for Symbol or Name</h2>
        <label htmlFor="acronym" className="col-12 col-m-9">
          <input type="text" className="queue" placeholder="AAPL" id="acronym" onChange={(event) => setQuery(event.target.value)} />
        </label>
        { switchLink() }
      </form>
      { error }
    </div>
  );
};

ConnectedStocksForm.propTypes = {
  filterResult: PropTypes.func.isRequired,
};

const StocksForm = connect(null, select)(ConnectedStocksForm);

export default StocksForm;
