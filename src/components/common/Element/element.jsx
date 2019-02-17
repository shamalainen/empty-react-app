import React from 'react';
import PropTypes from 'prop-types';

import './element.scss';

export const Element = ({
  TagName,
  className,
  flex,
  spaceAround,
  spaceBetween,
  flexColumn,
  flexRow,
  verticalCenter,
  horizontalCenter,
  flexStretch,
  ...props
}) => {
  const classes = [className];
  if (flex) classes.push('flex');
  if (spaceAround) classes.push('flex--space-around');
  if (spaceBetween) classes.push('flex--space-between');
  if (flexColumn) classes.push('flex--column');
  if (flexRow) classes.push('flex--row');
  if (horizontalCenter) classes.push('flex--horizontal-center');
  if (verticalCenter) classes.push('flex--vertical-center');
  if (flexStretch) classes.push('flex--stretch');

  return <TagName className={classes.join(' ')} {...props} />;
};

Element.propTypes = {
  TagName: PropTypes.string,
};
Element.defaultProps = {
  TagName: 'div',
};
