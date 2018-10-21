import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = () => (
  <ul className="main-menu">
    <li className="main-menu__item">
      <Link className="main-menu__link" to="/">
        PAGE 1
      </Link>
    </li>
    <li className="main-menu__item">
      <Link className="main-menu__link" to="/page-2">
        PAGE 2
      </Link>
    </li>
    <li className="main-menu__item">
      <Link className="main-menu__link" to="/page-3">
        PAGE 3
      </Link>
    </li>
  </ul>
);

export { HeaderMenu };
