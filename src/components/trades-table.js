import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';

export const TradesTable = ({ tableData }) => (
  <table className="table">
    <thead>
      <tr>
        <td>ID</td>
        <td>Quantity</td>
        <td>Price</td>
      </tr>
    </thead>
    <tbody>
      {tableData.map(row => (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.quantity}</td>
          <td><NumberFormat value={row.price} decimalScale={2} displayType={'text'} thousandSeparator={true} /></td>
        </tr>
      ))}
    </tbody>
  </table>
);
