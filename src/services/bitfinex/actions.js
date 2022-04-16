import { BITFINEX_URL } from '../../constants/index';

export const GET_PRICE = 'BITFINEX_GET_PRICE';
export const GET_PRICE_SUCCESS = 'BITFINEX_GET_PRICE_SUCCESS';
export const GET_PRICE_ERROR = 'BITFINEX_GET_PRICE_ERROR';

export const GET_TRADES = 'BITFINEX_GET_TRADES';
export const GET_TRADES_SUCCESS = 'BITFINEX_GET_TRADES_SUCCESS';
export const GET_TRADES_ERROR = 'BITFINEX_GET_TRADES_ERROR';

export const getBitfinexPrice = (symbol) => (dispatch) => {
  dispatch({ type: GET_PRICE });
  return fetch(`${BITFINEX_URL}/v2/ticker/t${symbol}`)
    .then(res => res.json())
    .then(res => dispatch({ type: GET_PRICE_SUCCESS, data: res }))
    .catch(error => dispatch({ type: GET_PRICE_ERROR, error: error || 'There was an error fetching the price.' }))
}

export const getBitfinexTrades = (symbol) => (dispatch) => {
  dispatch({ type: GET_TRADES });
  return fetch(`${BITFINEX_URL}/v2/trades/t${symbol}/hist`)
    .then(res => res.json())
    .then(res => dispatch({ type: GET_TRADES_SUCCESS, data: res }))
    .catch(error => dispatch({ type: GET_TRADES_ERROR, error: error || 'There was an error fetching trades.' }))
}
