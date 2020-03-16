import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ imageData }) => (
  <div>
    <button id="left"></button>
    {imageData.map((image) => <img src={image.url} key={image.url} />)}
    <button id="right"></button>
  </div>
);

Carousel.propTypes = {
  imageData: PropTypes.array,
};

export default Carousel;
