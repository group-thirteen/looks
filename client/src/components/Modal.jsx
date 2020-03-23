import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Modal.css';

const Modal = ({ onClose, lookUrl, embedCode }) => (
  <div test='modal' className={styles.modal}>
    <button test='closeButton' className={styles.closeButton} onClick={onClose}>X</button>
    <h2>Share This Look</h2>
    <p>Copy Link</p>
    <p>{lookUrl}</p>
    <p>Copy Embed Code</p>
    <p>Add this look to your website by copying this code:</p>
    <p>{embedCode}</p>
  </div>
);


Modal.propTypes = {
  onClose: PropTypes.func,
  lookUrl: PropTypes.string,
  embedCode: PropTypes.string,
};

export default Modal;
