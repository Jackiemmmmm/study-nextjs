import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '~components/footer';
import Header from '~components/header';

const useStyles = makeStyles(() => ({
  main: { flex: 1 },
}));

function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.main}>{children}</div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  renderingIsBrowser: PropTypes.bool.isRequired,
};

export default Layout;
