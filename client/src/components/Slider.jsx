import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Slider.css';

const Slider = ({ index }) => (
  <div className={styles.slider} test='slider'>
    <div className={index === 0 ? styles.bold : styles.normal}></div>
    <div className={index === 1 ? styles.bold : styles.normal}></div>
    <div className={index === 2 ? styles.bold : styles.normal}></div>
  </div>
);

Slider.propTypes = {
  index: PropTypes.number,
};

export default Slider;
