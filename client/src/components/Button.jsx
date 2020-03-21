import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.css';

const getClass = (id, index) => {
  if (index === 0 && id === 'left') {
    return [styles.left, styles.grey].join(' ');
  }

  if (index === 2 && id === 'right') {
    return [styles.right, styles.grey].join(' ');
  }

  if (index !== 0 && id === 'left') {
    return styles.left;
  }

  return styles.right;
};

const Button = ({ clickHandler, id, index }) => (
  <button
  type="button"
  id={id}
  className={getClass(id, index)}
  onClick={clickHandler}>
    {id === 'left' ? '<' : '>'}
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Button;
