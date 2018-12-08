import React from 'react';
import PropTypes from 'prop-types';

const ImagesImage = ({ category }) => (
  <img
    className="utils--mrb-1 utils--shadow utils--w100"
    src={`https://placeimg.com/1280/720/${category}`}
    alt={`${category}`}
  />
);

ImagesImage.propTypes = {
  category: PropTypes.string.isRequired,
};

export { ImagesImage };
