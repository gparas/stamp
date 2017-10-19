import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  const {color, width, height, className, ...otherProps} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      {...otherProps}
    >
      <path fill={color} d="M20.5 20.5l-.4-.4-6.1-6.1v3.8l2.4 2.4c-1.3.7-2.8 1.1-4.4 1.1-5.1 0-9.3-4.2-9.3-9.3s4.2-9.3 9.3-9.3 9.3 4.2 9.3 9.3c0 1.9-.6 3.7-1.6 5.2l1.5 2.5c1.8-2.2 2.8-4.8 2.8-7.7 0-6.6-5.4-12-12-12s-12 5.4-12 12 5.4 12 12 12c2.3 0 4.5-.7 6.4-1.8l1.8 1.8h3.8l-3.5-3.5z"></path>
    </svg>
  );
};

Logo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Logo.defaultProps = {
  color: 'currentColor',
  width: 24,
  height: 24
};

export default Logo;
