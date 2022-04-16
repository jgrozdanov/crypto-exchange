export const initialState = {
  binance: {
    data: { price: 0 },
    isLoading: false,
    error: null
  },
  bitfinex: {
    data: [],
    isLoading: false,
    error: null
  },
  huobi: {
    data: { tick: { ask: [] }},
    isLoading: false,
    error: null
  },
  kraken: {
    data: {},
    isLoading: false,
    error: null
  },
  trades: {
    binance: {
      data: [],
      isLoading: false,
      error: null
    },
    bitfinex: {
      data: [],
      isLoading: false,
      error: null
    },
    huobi: {
      data: [],
      isLoading: false,
      error: null
    },
    kraken: {
      data: [],
      isLoading: false,
      error: null
    }
  }
};
