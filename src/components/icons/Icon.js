import React from 'react';
import PropTypes from 'prop-types';

const icons = {
  backpack: <g><path d="M5.5 23.5h-2c-.553 0-1-.447-1-1v-4.5c0-.828.672-1.5 1.5-1.5h1.5v7zM18.5 23.5h2c.553 0 1-.447 1-1v-4.5c0-.828-.67-1.5-1.5-1.5h-1.5v7zM16.5 23.5h-9v-5.5c0-.828.672-1.5 1.5-1.5h6c.828 0 1.5.672 1.5 1.5v5.5zM18.5 10.5v13h-13v-13M9.5 10.5h5"/><path d="M7.5 7.5h2v5h-2zM14.5 7.5h2v5h-2zM7.5 19.5h9M2.5 19.5h3M18.5 19.5h3M7.5 10.5h-2c-.551 0-1-.448-1-1v-6c0-1.657 1.344-3 3-3h9c1.658 0 3 1.343 3 3v6c0 .552-.447 1-1 1h-2"/></g>,
  gauge: <g><circle cx="12" cy="12" r="11.5"/><circle cx="12" cy="12" r="1.5"/><path d="M13.061 10.939l4.949-4.949M2.443 12.186h2M3.223 15.635l1.847-.765M20.775 15.636l-1.846-.766M21.499 12.001l-1.999-.001M20.776 8.365l-1.847.765M15.636 3.224l-.766 1.846M11.943 2.686v2M8.365 3.223l.765 1.847M5.283 5.282l1.413 1.414M3.224 8.364l1.846.766"/><path d="M7.5 16.5h9v3h-9z"/></g>
};

const Icons = (props) => {
  const {icon, color, size, ...otherProps} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      fill="none"
      {...otherProps}
    >
     {icons[props.icon]}
    </svg>
  );
};

Icons.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icons.defaultProps = {
  color: 'currentColor',
  size: '14'
};

export default Icons;