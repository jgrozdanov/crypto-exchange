import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export const PriceTable = ({ tableData, from, to, sort }) => {
  const rows = [...tableData];

  if (sort === 'asc') {
    rows.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sort === 'desc') {
    rows.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <td>Market</td>
          <td>{from}</td>
          <td>
            {sort === 'asc' ? <i className="bi-sort-numeric-down" aria-hidden="true"></i> : ''}
            {sort === 'desc' ? <i className="bi-sort-numeric-down-alt" aria-hidden="true"></i> : ''}
            <span> {to}</span>
          </td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.market} className="align-middle">
            <td>{row.market}</td>
            <td className="display-4">1</td>
            <td className={row.error ? "" : "display-4"}>
              {row.error ? row.error.toString() : <NumberFormat value={row.price} decimalScale={2} displayType={'text'} thousandSeparator={true} />}
            </td>
            <td>
              <Link to={`/${from}/${to}/${row.market.toLowerCase()}/details`} >
                <button type="button" className="btn btn-outline-secondary">See Trades</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
