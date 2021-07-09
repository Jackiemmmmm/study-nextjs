import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '~components/typography';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 31,
    position: 'relative',
    zIndex: 1,
    '& span': {
      zIndex: -1,
      position: 'absolute',
      top: 0,
      left: 0,
      fontWeight: 'bold',
      fontSize: 80,
      lineHeight: '80px',
      color: 'rgba(252, 206, 1, 0.32)',
    },
  },
  '@media (max-width: 768px)': {
    root: {
      paddingTop: 20,
      '& span': {
        fontSize: 64,
        lineHeight: '64px',
      },
    },
  },
}));

function TitleWithNumber({ title, number }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>{number}</span>
      <Typography variant="h4" component="h4">
        {title}
      </Typography>
    </div>
  );
}

TitleWithNumber.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default TitleWithNumber;
