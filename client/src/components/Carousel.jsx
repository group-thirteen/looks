import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx';

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
    }

    if (id === 'right') {
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
        <span>
          <button id="left" type="button" onClick={this.onClick}>&lt;</button>
        </span>
        {<Card product={this.state.currentCard} />}
        <span>
          <button id="right" type="button" onClick={this.onClick}>&gt;</button>
        </span>
      </div>
    );
  }
}

Carousel.propTypes = {
  imageData: PropTypes.array,
  category: PropTypes.string,
};

export default Carousel;
