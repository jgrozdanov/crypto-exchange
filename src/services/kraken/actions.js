import { KRAKEN_URL } from '../../constants/index';

export const GET_PRICE = 'KRAKEN_GET_PRICE';
export const GET_PRICE_SUCCESS = 'KRAKEN_GET_PRICE_SUCCESS';
export const GET_PRICE_ERROR = 'KRAKEN_GET_PRICE_ERROR';

export const GET_TRADES = 'KRAKEN_GET_TRADES';
export const GET_TRADES_SUCCESS = 'KRAKEN_GET_TRADES_SUCCESS';
export const GET_TRADES_ERROR = 'KRAKEN_GET_TRADES_ERROR';

export const getKrakenPrice = (symbol) => (dispatch) => {
  dispatch({ type: GET_PRICE });
  return fetch(`${KRAKEN_URL}/0/public/Ticker?pair=${symbol}`)
    .then(res => res.json())
    .then(res => {
      if (res.error && res.error.length) {
        return dispatch({ type: GET_PRICE_ERROR, error: res.error[0] });
      }
      return dispatch({ type: GET_PRICE_SUCCESS, data: res.result });
    })
    .catch(error => dispatch({ type: GET_PRICE_ERROR, error }))
}

export const getKrakenTrades = (symbol) => (dispatch) => {
  dispatch({ type: GET_TRADES });
  return fetch(`${KRAKEN_URL}/0/public/Trades?pair=${symbol}`)
    .then(res => res.json())
    .then(res => {
      if (res.error && res.error.length) {
        return dispatch({ type: GET_TRADES_ERROR, error: res.error[0] });
      }
      return dispatch({ type: GET_TRADES_SUCCESS, data: res.result });
    })
    .catch(error => dispatch({ type: GET_TRADES_ERROR, error }))
}
