import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, style }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: null,
  className: '',
  style: {},
};

export default Button;