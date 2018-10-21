import React from 'react';

import { ImagesImage } from './';

const Images = () => (
  <div className="container container--inset">
    <ImagesImage category="tech" />
    <ImagesImage category="arch" />
    <ImagesImage category="nature" />
    <ImagesImage category="animals" />
    <ImagesImage category="people" />
  </div>
);

export { Images };
