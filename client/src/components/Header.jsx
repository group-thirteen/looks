import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Header.css';

const Header = ({ title, user }) => (
  <div className={styles.header} test="header">
    <h1 className={styles.lookname}>{title}</h1>
    <p className={styles.username}>{user}</p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
};

export default Header;
