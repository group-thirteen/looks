import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
  <div test="card">
    <img src={props.product.url} />
    <p>{props.product.price}</p>
  </div>
);

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
