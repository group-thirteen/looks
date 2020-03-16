import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ imageData }) => (
  <div test="carousel">
    <button id="left" type="button">PREV</button>
    {imageData.map((image) => <img src={image.url} key={image.url} />)}

    {imageData.map((image) => <div key={image.price}>{image.price}</div>)}
    <button id="right" type="button">NEXT</button>
  </div>
);

Carousel.propTypes = {
  imageData: PropTypes.array,
};

export default Carousel;
