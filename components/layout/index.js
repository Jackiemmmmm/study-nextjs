import PropTypes from 'prop-types';
import React from 'react';

function Layout({ children }) {
  return <div>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
