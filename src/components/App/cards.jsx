import React from 'react';

import { Card } from '../Card';

const Cards = () => (
  <div className="container container--inset">
    <Card color="blue" />
    <div className="card-container card-container--2">
      <Card color="orange" />
      <Card color="red" />
    </div>
    <div className="card-container card-container--3">
      <Card color="white" />
      <Card color="green" />
      <Card color="purple" />
    </div>
  </div>
);

export { Cards };
