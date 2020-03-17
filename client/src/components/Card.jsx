import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Card.css';

const Card = (props) => (
  <div className={styles.card} test="card">
    <img className={styles.productimg} src={props.product.url} />
    <p>{props.product.price}</p>
  </div>
);

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
