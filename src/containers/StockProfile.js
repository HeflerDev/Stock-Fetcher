import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getApiUrl from '../logic/getApiUrl';

const mapStateToProps = (state) => ({
  profile: state.stocksReducer,
});

const ConnectedStockProfile = ({ match: { params: { id } } }) => {
  const [companyData, setCompanyData] = useState(null);
  const [viewMoreDesc, setViewMore] = useState(false);
  const [company, setCompany] = useState(false);
  const [stocks, setStocks] = useState(false);

  useEffect(() => {
    async function fetchCompanyData(id) {
      const response = await fetch(getApiUrl.profile(id));
      const [data] = await response.json(response);

      setCompanyData(data);
      console.log(data);
    }

    fetchCompanyData(id);
  }, []);

  if (companyData) {
    const {
      symbol,
      price,
      currency,
      companyName,
      image,
      isActivelyTrading,
      description,
      website,
      country,
      city,
      ceo,
      fullTimeEmployees,
      industry,
      phone,
      sector,
      state,
      beta,
      volAvg,
      mktCap,
      lastDiv,
      range,
      changes,
      exchangeShortName,
    } = companyData;

    const checkForActivity = () => {
      if (isActivelyTrading) {
        return <div className="col-12 txt active">Active</div>;
      }
      return <div className="col-12 txt inactive">Inactive</div>;
    };

    const viewMore = () => {
      if (viewMoreDesc) {
        return setViewMore(false);
      }
      return setViewMore(true);
    };

    const checkForReadingStatus = () => {
      if (description) {
        if (viewMoreDesc) {
          return (
            <>
              <p className="col-12 information">{ description }</p>
              <button className="read-more-btn col-12" type="button" onClick={viewMore}>-- Hide --</button>
            </>
          );
        }

        const cut = description.slice(0, 140);
        return (
          <>
            <div className="col-12 sm-txt fade-out">{ `${cut}...` }</div>
            <button className="read-more-btn col-12" type="button" onClick={viewMore}>-- View More --</button>
          </>
        );
      }
      return <div className="col-12 read-more-btn">-- No Description Avaiable --</div>;
    };

    const handleCompanyInfo = () => {
      if (company) {
        return (
          <>
            <div className="queue between">
              <span>Ceo:</span>
              <span>{ ceo }</span>
            </div>
            <div className="queue between">
              <span>Employees:</span>
              <span>{ fullTimeEmployees }</span>
            </div>
            <div className="queue between">
              <span>Industry:</span>
              <span>{ industry }</span>
            </div>
            <div className="queue between">
              <span>Phone:</span>
              <span>{ phone }</span>
            </div>
            <div className="queue between">
              <span>Sector:</span>
              <span>{ sector }</span>
            </div>
            <div className="queue between">
              <span>State:</span>
              <span>{ state }</span>
            </div>
            <button type="button" className="read-more-btn btn" onClick={() => setCompany(false)}>Hide</button>
          </>
        );
      }
      return <button type="button" className="read-more-btn btn" onClick={() => setCompany(true)}>Company Info</button>;
    };

    const handleStocksInfo = () => {
      if (stocks) {
        return (
          <>
            <div className="queue between">
              <span>Price:</span>
              <span>{ price }</span>
            </div>
            <div className="queue between">
              <span>Currency:</span>
              <span>{ currency }</span>
            </div>
            <div className="queue between">
              <span>Exchange:</span>
              <span>{ exchangeShortName }</span>
            </div>
            <div className="queue between">
              <span>Beta:</span>
              <span>{ beta }</span>
            </div>
            <div className="queue between">
              <span>Average Volume:</span>
              <span>{ volAvg }</span>
            </div>
            <div className="queue between">
              <span>Market Cap.:</span>
              <span>{ mktCap }</span>
            </div>
            <div className="queue between">
              <span>Last Div.:</span>
              <span>{ lastDiv }</span>
            </div>
            <div className="queue between">
              <span>Range.:</span>
              <span>{ range }</span>
            </div>
            <div className="queue between">
              <span>Changes.:</span>
              <span>{ changes }</span>
            </div>
            <button type="button" className="read-more-btn btn" onClick={() => setStocks(false)}>Hide</button>
          </>
        );
      }
      return <button type="button" className="read-more-btn btn" onClick={() => setStocks(true)}>Stocks Info</button>;
    };

    return (
      <div className="stack">
        <a href={website} target="_blank" rel="noreferrer">
          <h1>{ companyName }</h1>
          <img src={image} alt="Logo" />
        </a>
        <div className="board">
          <div className="col-6 txt">{ symbol }</div>
          <div className="col-6 txt">{ `${price} ${currency}` }</div>
          <div className="col-12 sm-txt">{ `${city} - ${country}` }</div>
          { checkForActivity() }
          { checkForReadingStatus() }
        </div>
        { handleCompanyInfo() }
        { handleStocksInfo() }
      </div>
    );
  }
  return <> Null </>;
};

ConnectedStockProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  profile: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    companyName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isActivelyTrading: PropTypes.bool.isRequired,
    description: PropTypes.string,
    website: PropTypes.string.isRequired,
    country: PropTypes.string,
    city: PropTypes.string,
    ceo: PropTypes.string,
    fullTimeEmployees: PropTypes.string,
    industry: PropTypes.string,
    phone: PropTypes.string,
    sector: PropTypes.string,
    state: PropTypes.string,
    beta: PropTypes.number.isRequired,
    volAvg: PropTypes.number.isRequired,
    mktCap: PropTypes.number.isRequired,
    lastDiv: PropTypes.number.isRequired,
    range: PropTypes.string.isRequired,
    changes: PropTypes.number,
    exchangeShortName: PropTypes.string.isRequired,
  }),
};

ConnectedStockProfile.defaultProps = {
  match: {
    params: {
      id: 'n/a',
    },
  },
  profile: PropTypes.shape({
    currency: 'No Data Declared',
    description: 'No Description Avaiable',
    country: 'n/a',
    city: 'n/a',
    ceo: 'n/a',
    fullTimeEmployees: 'n/a',
    industry: 'n/a',
    phone: 'n/a',
    sector: 'n/a',
    state: 'n/a',
    changes: 'n/a',
  }),
};

const StockProfile = connect(mapStateToProps)(ConnectedStockProfile);

export default StockProfile;
