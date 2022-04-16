export const krakenPriceSelector = (state) => ({
  market: 'Kraken',
  price: getKrakenPrice(state.kraken.data),
  error: state.kraken.error
});

export const krakenTradesSelector = (state) => ({
  data: getKrakenTrades().slice(0, 5).map((trade) => ({
    id: '-',
    quantity: trade[1],
    price: trade[0]
  })),
  error: state.trades.kraken.error
});

const getKrakenPrice = (data) => {
  for (const key in data) {
    return data[key].a[0]
  }
  return 0;
};

const getKrakenTrades = (data) => {
  for (const key in data) {
    return data[key];
  }
  return [];
};
