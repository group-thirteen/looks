import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import styles from '../styles/LikeShareDesc.css';

const numLikeCheck = (num) => {
  if (num > 0) {
    return `${num} ${num > 1 ? 'love' : 'person loves'} this look`;
  }

  return null;
};

const unLiked = './unliked.png';
const likedIcon = './liked.png';

class LikeShareDesc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };

    this.likeLook = this.likeLook.bind(this);
  }

  likeLook(event) {
    event.preventDefault();

    this.setState((state) => (
      {liked: !state.liked}
    ));
    
    $.ajax({
      method: 'POST',
      url: '/api/updateLikes',
      data: {
        lookId: this.props.lookId,
        updateDirection: this.state.liked ? 'down' : 'up',
      },
      success: (successMessage) => {
        console.log(`Successfully updated document ${successMessage}`);
        this.props.update(this.props.lookId);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div test="likeDescBar" className={styles.likeDesc}>
        <div className={styles.likeShare} test="likeshare">
          <span className={styles.iconbar}>

            <img
            className={styles.likeicon}
            test="likebutton"
            onClick={this.likeLook}
            src= {this.state.liked ? likedIcon : unLiked}/>

            <img
            className={styles.shareicon}
            test="sharebutton"
            onClick={this.props.toggleModal}
            src='./shareicon.png' />

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
