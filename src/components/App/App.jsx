import React from 'react';
import { Route } from 'react-router-dom';

import { Home, About, Contact } from '../App';
import { Header } from '../Header';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/page-2" component={About} />
      <Route exact path="/page-3" component={Contact} />
    </main>
  </div>
);

export { App };
