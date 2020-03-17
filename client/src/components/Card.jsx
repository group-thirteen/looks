import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
  <div className="card" test="card">
    <img className="productimg" src={props.product.url} />
    <p>{props.product.price}</p>
  </div>
);

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
