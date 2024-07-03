import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src, alt, className, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`avatar ${className}`}
      style={style}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Avatar.defaultProps = {
  alt: 'Avatar',
  className: '',
  style: {},
};

export default Avatar;