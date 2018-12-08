import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ color }) => (
  <div className={`card${` card--${color}` || ''} utils--mrb-1`}>
    <h2>Hello.</h2>
    <h4>
      I{"'"}m a Card and the color is {color}
    </h4>
    <p>
      Suspendisse finibus lacus sit amet ipsum malesuada dictum. Proin lacus
      libero, bibendum in quam a, fermentum iaculis lorem. Etiam id leo ut ipsum
      mollis gravida. Sed et risus efficitur, aliquam nulla ac, malesuada dui.
      Pellentesque in lobortis elit. In quam sem, accumsan vitae justo et,
      rhoncus malesuada ipsum. Ut dignissim lacinia velit eu laoreet. Donec
      dolor justo, tristique viverra tincidunt sed, aliquet a ante. Ut erat
      enim, pellentesque ut quam quis, efficitur ultricies elit.
    </p>
  </div>
);

Card.defaultProps = {
  color: '',
};

Card.propTypes = {
  color: PropTypes.string,
};

export { Card };
