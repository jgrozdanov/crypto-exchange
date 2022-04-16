import { combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { binancePriceReducer, binanceTradesReducer } from '../services/binance/reducers';
import { bitfinexPriceReducer, bitfinexTradesReducer } from '../services/bitfinex/reducers';
import { huobiPriceReducer, huobiTradesReducer } from '../services/huobi/reducers';
import { krakenPriceReducer, krakenTradesReducer } from '../services/kraken/reducers';

export default combineReducers({
  router: connectRouter(createBrowserHistory()),
  binance: binancePriceReducer,
  bitfinex: bitfinexPriceReducer,
  huobi: huobiPriceReducer,
  kraken: krakenPriceReducer,
  trades: combineReducers({
    binance: binanceTradesReducer,
    bitfinex: bitfinexTradesReducer,
    huobi: huobiTradesReducer,
    kraken: krakenTradesReducer
  })
});
