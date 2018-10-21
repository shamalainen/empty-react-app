import React from 'react';

import { HeaderLogo, HeaderMenu } from './';

const Header = () => (
  <header className="container container--inset">
    <HeaderLogo />
    <HeaderMenu />
  </header>
);

export { Header };
