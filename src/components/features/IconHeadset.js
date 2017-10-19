import React from 'react';
import PropTypes from 'prop-types';

const Headset = (props) => {
  const {color, width, height, className, ...otherProps} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      className={className}
      {...otherProps}
    >
      <path d="M41,27h-2v-3c0-8.271-6.729-15-15-15S9,15.729,9,24v3H7v-3c0-9.374,7.626-17,17-17s17,7.626,17,17V27z"/>
      <path d="M5,41c-2.757,0-5-2.243-5-5s2.243-5,5-5v2c-1.654,0-3,1.346-3,3s1.346,3,3,3V41z"/>
      <path d="M10,46H8c-2.206,0-4-1.794-4-4V30c0-2.206,1.794-4,4-4h2c2.206,0,4,1.794,4,4v12C14,44.206,12.206,46,10,46z M8,28     c-1.103,0-2,0.897-2,2v12c0,1.103,0.897,2,2,2h2c1.103,0,2-0.897,2-2V30c0-1.103-0.897-2-2-2H8z"/>
      <path d="M43,41v-2c1.654,0,3-1.346,3-3s-1.346-3-3-3v-2c2.757,0,5,2.243,5,5S45.757,41,43,41z"/>
      <path d="M39,46c-2.757,0-5-2.243-5-5V31c0-2.757,2.243-5,5-5s5,2.243,5,5v10C44,43.757,41.757,46,39,46z M39,28     c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3s3-1.346,3-3V31C42,29.346,40.654,28,39,28z"/>
    </svg>
  );
};

Headset.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Headset.defaultProps = {
  color: 'currentColor',
  width: 48,
  height: 48
};

export default Headset;
