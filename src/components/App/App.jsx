import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Home, About, Contact } from './';

const App = () => (
  <div className="App">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Contact" component={Contact} />
  </div>
);

export { App };