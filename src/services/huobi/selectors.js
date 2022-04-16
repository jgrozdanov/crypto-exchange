export const huobiPriceSelector = (state) => ({
  market: 'Huobi',
  price: state.huobi.data.tick.ask[0] || 0,
  error: state.huobi.error
});

export const huobiTradesSelector = (state) => ({
  data: state.trades.huobi.data.map((trade) => ({
    id: trade.data[0]['trade-id'],
    quantity: trade.data[0].amount,
    price: trade.data[0].price
  })),
  error: state.trades.huobi.error
});
