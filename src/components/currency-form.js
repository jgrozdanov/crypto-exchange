import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const CurrencyForm = ({ from, to, handleSort }) => {
  const [fromValue, setFromValue] = useState(from);
  const [toValue, setToValue] = useState(to);
  const history = useHistory();

  const handleSwap = () => {
    history.push(`/${to}/${from}`);
    setToValue(from);
    setFromValue(to);
  }

  return (
    <form className="padding-v">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="From currency symbol (BTC, USDT, etc...)"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)} />
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-outline-secondary btn-lg w-100" onClick={handleSwap}>
            <i className="bi-arrow-left-right" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-md-5">
          <input type="text"
            className="form-control form-control-lg"
            placeholder="To currency symbol (BTC, USDT, etc...)"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)} />
        </div>
      </div>
      <div className="row padding-v">
        <div className="col-md-10">
        <Link to={`/${fromValue}/${toValue}`} >
          <button type="button" className="btn btn-primary btn-lg w-100">Search Market Prices</button>
        </Link>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-outline-secondary btn-lg w-100" onClick={handleSort}>
            <span>Sort by price</span>
          </button>
        </div>
      </div>
    </form>
  );
};
