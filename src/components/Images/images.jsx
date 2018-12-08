import React from 'react';

import { ImagesImage } from './';

const categories = ['tech', 'arch', 'nature', 'animals', 'people'];

const Images = () => (
  <div className="container container--inset">
    <h1>PAGE 4</h1>

    {categories.map(i => (
      <ImagesImage category={i} key={i} />
    ))}
  </div>
);

export { Images };
