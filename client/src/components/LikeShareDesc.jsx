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
      liked: false,
    };
  }

  render() {
    return (
      <div test="likeDescBar" className={styles.likeDesc}>
        <div className={styles.likeShare} test="likeshare">
          <span className={styles.iconbar}>

            <img
            className={styles.likeicon}
            test="likebutton"
            src='https://i.pinimg.com/originals/d4/34/3f/d4343ffcd8fa017e790e6e9ab41a4411.png' />

            <img
            className={styles.shareicon}
            test="sharebutton"
            onClick={this.props.toggleModal}
            src='https://www.pngkey.com/png/full/207-2070780_png-file-apple-share-icon-svg.png' />

          </span>

          <div className={styles.likes} test="likes">
            {numLikeCheck(this.props.likes)}
          </div>

        </div>


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
  toggleModal: PropTypes.func,
};

export default LikeShareDesc;
