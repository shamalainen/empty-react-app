import React from 'react';

import { Card } from '../Card';
import { ImagesImage } from '../Images';

const Cards = () => (
  <div className="container container--inset">
    <h1>PAGE 2</h1>
    <Card color="blue" />
    <ImagesImage category="arch" />
    <div className="card-container card-container--2">
      <Card color="orange" />
      <Card color="red" />
    </div>
    <ImagesImage category="tech" />
    <div className="card-container card-container--3">
      <Card color="white" />
      <Card color="green" />
      <Card color="purple" />
    </div>
  </div>
);

export { Cards };
