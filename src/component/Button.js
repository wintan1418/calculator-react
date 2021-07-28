import React from 'react';
import propTypes from 'prop-types';
import './Button.css';

const Button = ({
  name, color, wide, clickHandler,
}) => (
  <button
    type="button"
    style={{ width: wide ? '50%' : '25%', background: color }}
    onClick={clickHandler.bind(null, name)}

  >
    {name}
  </button>
);

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
