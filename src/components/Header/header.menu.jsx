import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = () => (
  <ul className="main-menu">
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
    <li className="main-menu__item">
      <Link className="main-menu__link" to="/page-4">
        PAGE 4
      </Link>
    </li>
  </ul>
);

export { HeaderMenu };
