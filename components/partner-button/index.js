import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 320,
    padding: '11px 0',
    borderRadius: '4px',
    backgroundColor: ({ theme }) => (theme === 'dark' ? '#fcce01' : 'transparent'),
    border: '1px solid #fcce01',
    color: '#4c4c4c',
    lineHeight: '32px',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (max-width: 768px)': {
    root: { maxWidth: 215, lineHeight: '24px', fontSize: 16 },
  },
}));

function PartnerButton({ theme }) {
  const classes = useStyles({ theme });
  return (
    <a className={classes.root} href="http://studentcom.mikecrm.com/e2Y0XwT">
      Become a partner
    </a>
  );
}

PartnerButton.propTypes = {
  theme: PropTypes.oneOf(['dark', 'default']),
};

PartnerButton.defaultProps = {
  theme: 'default',
};

export default PartnerButton;
