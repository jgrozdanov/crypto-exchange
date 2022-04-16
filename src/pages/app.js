import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Home } from './home';

const App = () => (
  <>
    <nav className="navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row bd-navbar">
      <a className="navbar-brand mr-0 mr-md-2"><i className="bi-currency-exchange" aria-hidden="true"></i> Crypto Exchange</a>
    </nav>

    <div className="container">
      <Route exact path="/">
        <Redirect to="/BTC/USDT" />
      </Route>
      <Route path="/:from/:to" component={Home} />
    </div>
  </>
);

export default App;
