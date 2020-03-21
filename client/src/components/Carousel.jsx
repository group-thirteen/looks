/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
import Slider from './Slider.jsx';
import styles from '../styles/Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: this.props.imageData[0],
      hovered: false,
    };

    this.onClick = this.onClick.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    const { id } = event.target;
    const currentIdx = this.props.imageData.indexOf(this.state.currentCard);

    if (id === 'left') {
      if (currentIdx > 0) {
        this.setState((state) => {
          return {
            currentCard: this.props.imageData[currentIdx - 1],
            hovered: state.hovered,
          };
        });
      }
    }

    if (id === 'right') {
      if (currentIdx < this.props.imageData.length - 1) {
        this.setState((state) => {
          return {
            currentCard: this.props.imageData[currentIdx + 1],
            hovered: state.hovered,
          };
        });
      }
    }
  }

  mouseEnter(event) {
    event.preventDefault();

    this.setState((state) => {
      return {
        currentCard: state.currentCard,
        hovered: true,
      };
    });
  }

  mouseExit(event) {
    event.preventDefault();

    this.setState((state) => {
      return {
        currentCard: state.currentCard,
        hovered: false,
      };
    });
  }

  render() {
    return (
      <div test="carousel" className={styles.carousel} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}>
        {this.state.hovered ? <Button
          test='left'
          id='left'
          clickHandler={this.onClick}
          index={this.props.imageData.indexOf(this.state.currentCard)} />
          : null}

        <img test="productimg" src={this.state.currentCard.url} className={styles.productimg}/>
        <p test="price" className={styles.price}>{this.state.currentCard.price}</p>

        {this.state.hovered ? <Button
          test='right'
          id='right'
          clickHandler={this.onClick}
          index={this.props.imageData.indexOf(this.state.currentCard)} />
          : null}

        <Slider index={this.props.imageData.indexOf(this.state.currentCard)} />
      </div>
    );
  }
}

Carousel.propTypes = {
  imageData: PropTypes.array,
  category: PropTypes.string,
};

export default Carousel;
