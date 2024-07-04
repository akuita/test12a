import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';

const Button = ({ children, onClick, className, style, variant }) => {
  const { t } = useTranslation();
  const variantClass = variant ? `button--${variant}` : '';

  return (
    <button
      onClick={onClick}
      className={`button ${variantClass} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  onClick: null,
  variant: 'primary',
  className: '',
  style: {},
};

export default Button;