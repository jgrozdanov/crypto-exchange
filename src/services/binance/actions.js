import { BINANCE_URL } from '../../constants/index';

export const GET_PRICE = 'BINANCE_GET_PRICE';
export const GET_PRICE_SUCCESS = 'BINANCE_GET_PRICE_SUCCESS';
export const GET_PRICE_ERROR = 'BINANCE_GET_PRICE_ERROR';

export const GET_TRADES = 'BINANCE_GET_TRADES';
export const GET_TRADES_SUCCESS = 'BINANCE_GET_TRADES_SUCCESS';
export const GET_TRADES_ERROR = 'BINANCE_GET_TRADES_ERROR';

export const getBinancePrice = (symbol) => (dispatch) => {
  dispatch({ type: GET_PRICE });
  return fetch(`${BINANCE_URL}/api/v3/ticker/price?symbol=${symbol}`)
    .then(res => res.json())
    .then(res => dispatch({ type: GET_PRICE_SUCCESS, price: res }))
    .catch(error => dispatch({ type: GET_PRICE_ERROR, error }))
};

export const getBinanceTrades = (symbol) => (dispatch) => {
  dispatch({ type: GET_TRADES });
  return fetch(`${BINANCE_URL}/api/v3/trades?symbol=${symbol}`)
    .then(res => res.json())
    .then(res => dispatch({ type: GET_TRADES_SUCCESS, trades: res }))
    .catch(error => dispatch({ type: GET_TRADES_ERROR, error }))
}
