import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/LikeShareDesc.css';

const numLikeCheck = (num) => {
  if (num > 0) {
    return `${num} ${num > 1 ? 'love' : 'person loves'} this look`;
  }

  return null;
};

class LikeShareDesc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes,
      liked: false,
    };
  }

  render() {
    return (
      <div test="likeDescBar" className={styles.likeDesc}>
        <div className={styles.likeShare} test="likeshare">
            <img className={styles.icons} test="likebutton" src='https://i.pinimg.com/originals/d4/34/3f/d4343ffcd8fa017e790e6e9ab41a4411.png' />
            <img className={styles.icons} test="sharebutton" src='https://www.pngkey.com/png/full/207-2070780_png-file-apple-share-icon-svg.png' />
        </div>

        <span className={styles.likes} test="likes">
          {numLikeCheck(this.state.likes)}
        </span>

        <div className={styles.description} test="description">
          {this.props.description}
        </div>

      </div>
    );
  }
}

LikeShareDesc.propTypes = {
  likes: PropTypes.number,
  description: PropTypes.string,
};

export default LikeShareDesc;
