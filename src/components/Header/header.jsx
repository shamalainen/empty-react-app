import React from 'react';
import { Route } from 'react-router-dom';

import { Home, About, Contact } from '../App';
import { HeaderLogo, HeaderMenu } from './';

const Header = () => (
  <React.Fragment>
    <header className="container container--inset">
      <HeaderLogo />
      <HeaderMenu />
    </header>
    <Route exact path="/" component={Home} />
    <Route exact path="/page-2" component={About} />
    <Route exact path="/page-3" component={Contact} />
  </React.Fragment>
);

export { Header };
