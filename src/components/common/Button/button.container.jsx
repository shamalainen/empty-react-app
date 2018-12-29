import React from 'react';
import PropTypes from 'prop-types';

import { Element } from '..';
import './btn-container.scss';

export const ButtonContainer = ({ className, center, ...props }) => {
  const classes = [className, 'btn-container'];
  if (center) classes.push('.btn-container--center');
  return <Element className={classes.join(' ')} {...props} />;
};

ButtonContainer.propTypes = { className: PropTypes.string };
ButtonContainer.defaultProps = { className: '' };
