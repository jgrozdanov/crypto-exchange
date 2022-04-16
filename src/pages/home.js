
import React, { useEffect, useState } from 'react';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouteMatch, Link, Route, Switch } from 'react-router-dom';
import { PriceTable } from '../components/price-table';
import { CurrencyForm } from '../components/currency-form';
import { TradesModal } from '../components/trades-modal';
import { getBinancePrice } from '../services/binance/actions';
import { getBitfinexPrice } from '../services/bitfinex/actions';
import { getHuobiPrice } from '../services/huobi/actions';
import { getKrakenPrice } from '../services/kraken/actions';
import { binancePriceSelector } from '../services/binance/selectors';
import { bitfinexPriceSelector } from '../services/bitfinex/selectors';
import { huobiPriceSelector } from '../services/huobi/selectors';
import { krakenPriceSelector } from '../services/kraken/selectors';
import { POLLING_INTERVAL } from '../constants/index';

export const Home = (props) => {
  const { path, url } = useRouteMatch();
  const { from, to } = useParams();
  const dispatch = useDispatch();
  const binance = useSelector(binancePriceSelector);
  const bitfinex = useSelector(bitfinexPriceSelector);
  const huobi = useSelector(huobiPriceSelector);
  const kraken = useSelector(krakenPriceSelector);
  const symbol = `${from}${to}`;
  const [tableSort, setTableSort] = useState(null);
  const [tableData, setTableData] = useState([binance, bitfinex, huobi, kraken]);

  const loadData = () => {
    dispatch(getBinancePrice(symbol));
    dispatch(getBitfinexPrice(symbol));
    dispatch(getHuobiPrice(symbol.toLowerCase()));
    dispatch(getKrakenPrice(symbol));
  }

  useEffect(() => {
    loadData();
    const interval = setInterval(() => {
      loadData();
    }, POLLING_INTERVAL);
    return () => clearInterval(interval);
  }, [from, to])

  useEffect(() => {
    setTableData([binance, bitfinex, huobi, kraken]);
  }, [binance, bitfinex, huobi, kraken])

  const handleSort = () => {
    if (!tableSort) {
      setTableSort('asc')
    }
    if (tableSort === 'asc') {
      setTableSort('desc')
    }
    if (tableSort === 'desc') {
      setTableSort(null)
    }
  }

  return (
    <div>
      <CurrencyForm from={from} to={to} handleSort={handleSort} sort={tableSort} />
      <PriceTable tableData={tableData} from={from} to={to} sort={tableSort} />
      <Route path={`${path}/:market/details`} component={TradesModal} />
    </div>
  );
};
