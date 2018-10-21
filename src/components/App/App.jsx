import React from 'react';
import { Route } from 'react-router-dom';

import { Home, About } from '../App';
import { Header } from '../Header';
import { Images } from '../Images';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/page-2" component={Home} />
      <Route exact path="/page-3" component={About} />
      <Route exact path="/page-4" component={Images} />
    </main>
  </div>
);

export { App };
