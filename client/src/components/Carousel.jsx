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
      currentIdx: 0,
      hovered: false,
    };

    this.onClick = this.onClick.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    const { id } = event.target;

    if (id === 'left') {
      if (this.state.currentIdx > 0) {
        this.setState((state) => {
          return {
            currentIdx: state.currentIdx - 1,
            hovered: state.hovered,
          };
        });
      }
    }

    if (id === 'right') {
      if (this.state.currentIdx < this.props.imageData.length - 1) {
        this.setState((state) => {
          return {
            currentIdx: state.currentIdx + 1,
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
        currentIdx: state.currentIdx,
        hovered: true,
      };
    });
  }

  mouseExit(event) {
    event.preventDefault();

    this.setState((state) => {
      return {
        currentIdx: state.currentIdx,
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
          index={this.state.currentIdx} />
          : null}

        <img test="productimg" src={this.props.imageData[this.state.currentIdx].url} className={styles.productimg}/>
        <p test="price" className={styles.price}>{this.props.imageData[this.state.currentIdx].price}</p>

        {this.state.hovered ? <Button
          test='right'
          id='right'
          clickHandler={this.onClick}
          index={this.state.currentIdx} />
          : null}

        <Slider index={this.state.currentIdx} />
      </div>
    );
  }
}

Carousel.propTypes = {
  imageData: PropTypes.array,
  category: PropTypes.string,
};

export default Carousel;
