import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Header.css';

const Header = ({ title, user }) => (
  <div className={styles.header} test="header">
    <h1 className={styles.lookname} test="lookname">{title}</h1>
    <h2 className={styles.username} test="username">
      <span className={styles.underline}>{user}</span>
    </h2>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
};

export default Header;
