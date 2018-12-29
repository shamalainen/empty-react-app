import React from 'react';
import PropTypes from 'prop-types';

import { Element } from '..';

import './container.scss';

export const Container = ({ className, inset, ...props }) => {
  const classes = [className, 'container'];
  if (inset) classes.push('container--inset');

  return <Element className={classes.join(' ')} {...props} />;
};

Container.propTypes = {
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};
