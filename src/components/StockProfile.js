import React, { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  profile: state.stocksReducer,
});

const ConnectedStockProfile = ({ profile }) => {
  const [viewMoreDesc, setViewMore] = useState(false);
  const [company, setCompany] = useState(false);
  const [stocks, setStocks] = useState(false);

  if (profile) {
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
    } = profile

    const checkForActivity = () => {
      if (isActivelyTrading) {
        return <div className="col-12 txt active">Active</div>
      }
      return <div className="col-12 txt inactive">Inactive</div>
    }

    const viewMore = () => {
      if (viewMoreDesc) {
        return setViewMore(false);
      }
      return setViewMore(true);
    }

    const checkForReadingStatus = () => {
      if (viewMoreDesc) {
        return (
          <>
            <p className="col-12">{ description }</p>
            <button className="read-more-btn col-12" type="button" onClick={ viewMore }>-- Hide --</button>
          </>
        );
      };

      const cut = description.slice(0, 140);
      return (
        <>
          <div className="col-12 sm-txt fade-out">{ `${cut}...` }</div>
          <button className="read-more-btn col-12" type="button" onClick={ viewMore }>-- View More --</button>
        </>
      )
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
        )
      }
      return <button type="button" className="read-more-btn btn" onClick={() => setCompany(true)}>Company Info</button>;
    }

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
        )
      }
      return <button type="button" className="read-more-btn btn" onClick={() => setStocks(true)}>Stocks Info</button>
    }

    return (
      <div className="stack">
        <a href={ website } target="_blank" rel="noreferrer">
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
    )
  }
  return <> Null </> ;
};

const StockProfile = connect(mapStateToProps)(ConnectedStockProfile);

export default StockProfile;
