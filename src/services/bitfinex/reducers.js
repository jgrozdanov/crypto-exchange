import { initialState } from '../../redux/initial-state';
import { GET_PRICE, GET_PRICE_SUCCESS, GET_PRICE_ERROR, GET_TRADES, GET_TRADES_SUCCESS, GET_TRADES_ERROR } from './actions';

export const bitfinexPriceReducer = (state = initialState.bitfinex, action) => {
  switch (action.type) {
    case GET_PRICE:
      return { ...state, isLoading: true };
    case GET_PRICE_SUCCESS:
      return { ...state, data: action.data, isLoading: false, error: null };
    case GET_PRICE_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}

export const bitfinexTradesReducer = (state = initialState.trades.bitfinex, action) => {
  switch (action.type) {
    case GET_TRADES:
      return { ...state, isLoading: true };
    case GET_TRADES_SUCCESS:
      return { ...state, data: action.data, isLoading: false, error: null };
    case GET_TRADES_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
