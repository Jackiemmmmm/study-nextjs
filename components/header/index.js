import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHeaderSticky } from './use-header-sticky';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    zIndex: '999',
    width: '100%',
    transition: '0.5s', // box-shadow
    height: '60px',
    ...theme.flex.center,
  },

  sticky: {
    backgroundColor: theme.colors.redBg,
    boxShadow: theme.shadow.main,
  },
}));

function Header() {
  const classes = useStyles();
  useTranslation(['booking', 'global-search']);
  const sticky = useHeaderSticky();

  return (
    <div className={classNames(classes.root, { [classes.sticky]: sticky })}>
      <h2>Header</h2>
    </div>
  );
}

Header.propTypes = {};

export default Header;
