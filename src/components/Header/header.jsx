import React from 'react';

import { HeaderLogo, HeaderMenu } from './';

const Header = () => (
  <header className="container container--inset utils--mrb-1">
    <HeaderLogo />
    <HeaderMenu />
  </header>
);

export { Header };
