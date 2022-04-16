import React, { useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBinanceTrades } from '../services/binance/actions';
import { getBitfinexTrades } from '../services/bitfinex/actions';
import { getHuobiTrades } from '../services/huobi/actions';
import { getKrakenTrades } from '../services/kraken/actions';
import { binanceTradesSelector } from '../services/binance/selectors';
import { bitfinexTradesSelector } from '../services/bitfinex/selectors';
import { huobiTradesSelector } from '../services/huobi/selectors';
import { krakenTradesSelector } from '../services/kraken/selectors';
import { TradesTable } from './trades-table';

const supportedMarkets = ['binance', 'bitfinex', 'huobi', 'kraken'];

export const TradesModal = () => {
  const dispatch = useDispatch();
  const { from, to, market } = useParams();
  const symbol = `${from}${to}`;

  const selectors = {
    binanceTrades: useSelector(binanceTradesSelector),
    bitfinexTrades: useSelector(bitfinexTradesSelector),
    huobiTrades: useSelector(huobiTradesSelector),
    krakenTrades: useSelector(krakenTradesSelector)
  }

  useEffect(() => {
    switch (market) {
      case 'binance':
        dispatch(getBinanceTrades(symbol)); break;
      case 'bitfinex':
        dispatch(getBitfinexTrades(symbol)); break;
      case 'huobi':
        dispatch(getHuobiTrades(symbol.toLowerCase())); break;
      case 'kraken':
        dispatch(getKrakenTrades(symbol)); break;
    }
  }, []);

  if (!supportedMarkets.find(supported => market === supported )) {
    return <Redirect to={`/${from}/${to}`} />
  }

  const renderTrades = (market) => {
    const selector = selectors[`${market}Trades`];
    return (
      selector.error ? <div className="alert alert-danger">{selector.error.toString()}</div> :
        <TradesTable tableData={selector.data} />
    );
  }

  return (
    <div className="overlay">
      <div className="modal show" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">recent trades for {from}-{to} on {market}</h5>
              <Link to={`/${from}/${to}`} >
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </Link>
            </div>
            <div className="modal-body">
              {renderTrades(market)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
