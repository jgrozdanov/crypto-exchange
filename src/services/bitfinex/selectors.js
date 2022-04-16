// bitfinex api is weird, response is like this:
// [
//   BID,
//   BID_SIZE,
//   ASK,
//   ASK_SIZE,
//   DAILY_CHANGE,
//   DAILY_CHANGE_RELATIVE,
//   LAST_PRICE,
//   VOLUME,
//   HIGH,
//   LOW
// ]

export const bitfinexPriceSelector = (state) => ({
  market: 'Bitfinex',
  price: state.bitfinex.data[6] || 0,
  error: state.bitfinex.error
});

// [
//   [
//     ID,
//     MTS,
//     AMOUNT,
//     PRICE
//   ]
// ]

export const bitfinexTradesSelector = (state) => ({
  data: state.trades.bitfinex.data.slice(0, 5).map((trade) => ({
    id: trade[0],
    quantity: trade[2],
    price: trade[3]
  })),
  error: state.trades.bitfinex.error
})
