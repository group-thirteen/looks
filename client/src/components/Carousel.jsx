import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx';
import exampleDbEntry from '../../../database/exampleDbEntry';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: this.props.imageData[0],
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    const { id } = event.target;
    const currentIdx = this.props.imageData.indexOf(this.state.currentCard);

    if (id === 'left') {
      if (currentIdx > 0) {
        this.setState({
          currentCard: this.props.imageData[currentIdx - 1],
        });
      }
    } else if (id === 'right') {
      if (currentIdx < this.props.imageData.length - 1) {
        this.setState({
          currentCard: this.props.imageData[currentIdx + 1],
        });
      }
    }
  }

  render() {
    return (
      <div test="carousel" className="carousel">
        <button id="left" type="button" onClick={this.onClick}>&lt;</button>
        {<Card product={this.state.currentCard} />}
        <button id="right" type="button" onClick={this.onClick}>&gt;</button>
      </div>
    );
  }
}

Carousel.propTypes = {
  imageData: PropTypes.array,
  category: PropTypes.string,
};

export default Carousel;
