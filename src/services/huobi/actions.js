import { HUOBI_URL } from '../../constants/index';

export const GET_PRICE = 'HUOBI_GET_PRICE';
export const GET_PRICE_SUCCESS = 'HUOBI_GET_PRICE_SUCCESS';
export const GET_PRICE_ERROR = 'HUOBI_GET_PRICE_ERROR';

export const GET_TRADES = 'HUOBI_GET_TRADES';
export const GET_TRADES_SUCCESS = 'HUOBI_GET_TRADES_SUCCESS';
export const GET_TRADES_ERROR = 'HUOBI_GET_TRADES_ERROR';

export const getHuobiPrice = (symbol) => (dispatch) => {
  dispatch({ type: GET_PRICE });
  return fetch(`${HUOBI_URL}/market/detail/merged?symbol=${symbol}`)
    .then(res => res.json())
    .then(res => {
      if (res.status === 'error') {
        return dispatch({ type: GET_PRICE_ERROR, error: res['err-msg'] });
      }
      return dispatch({ type: GET_PRICE_SUCCESS, data: res });
    })
    .catch(error => dispatch({ type: GET_PRICE_ERROR, error }))
}

export const getHuobiTrades = (symbol) => (dispatch) => {
  dispatch({ type: GET_TRADES });
  return fetch(`${HUOBI_URL}/market/history/trade?symbol=${symbol}&size=5`)
    .then(res => res.json())
    .then(res => {
      if (res.status === 'error') {
        return dispatch({ type: GET_TRADES_ERROR, error: res['err-msg'] });
      }
      return dispatch({ type: GET_TRADES_SUCCESS, data: res });
    })
    .catch(error => dispatch({ type: GET_TRADES_ERROR, error }))
}
