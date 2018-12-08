import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = () => (
  <Link className="logo" to="/">
    <img
      className="logo__image"
      src="https://placeimg.com/25/25/any"
      alt="logo"
    />
    TEXT HERE
  </Link>
);

export { HeaderLogo };
