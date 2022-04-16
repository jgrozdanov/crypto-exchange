export const binancePriceSelector = (state) => ({
  market: 'Binance',
  price: state.binance.data.price,
  error: state.binance.error
});

export const binanceTradesSelector = (state) => ({
  data: state.trades.binance.data.slice(0, 5).map((trade) => ({
    id: trade.id,
    quantity: trade.qty,
    price: trade.price
  })),
  error: state.trades.binance.error
});
