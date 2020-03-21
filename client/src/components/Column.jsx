import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel.jsx';
import styles from '../styles/Column.css';

const Column = (props) => (
  <div test="column" className={styles[`column${props.index}`]}>
    {props.categories.map((category) => <Carousel
      category={category}
      imageData={props.productData[category]}
      key={category}
      className={category} />)}
  </div>
);

Column.propTypes = {
  categories: PropTypes.array,
  productData: PropTypes.object,
  index: PropTypes.number,
};

export default Column;
