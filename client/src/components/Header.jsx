import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, user }) => (
  <div className="header" test="header">
    <h1 className="lookname">{title}</h1>
    <p className="username">{user}</p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
};

export default Header;
