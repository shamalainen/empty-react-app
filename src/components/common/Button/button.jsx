import React from 'react';
import PropTypes from 'prop-types';

import { Element } from '..';

import './btn.scss';

export const Button = ({
  TagName,
  className,
  big,
  bigText,
  outline,
  center,
  right,
  red,
  redOutline,
  blue,
  ...props
}) => {
  const classes = [className, 'btn'];
  if (big) classes.push('btn--big');
  if (bigText) classes.push('btn--big-text');
  if (outline) classes.push('btn--outline');
  if (center) classes.push('btn--center');
  if (right) classes.push('btn--right');
  if (red) classes.push('btn--red');
  if (redOutline) classes.push('btn--red-outline');
  if (blue) classes.push('btn--blue');

  return <Element TagName={TagName} className={classes.join(' ')} {...props} />;
};

Button.propTypes = {
  TagName: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  TagName: 'button',
  className: '',
};
