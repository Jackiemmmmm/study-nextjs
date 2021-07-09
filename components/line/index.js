import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { windowHeight } from '~hooks/use-scroll';
import ScrollAnim from 'rc-scroll-anim';
import React from 'react';

const ScrollParallax = ScrollAnim.Parallax;

const useStyles = makeStyles(() => ({
  line: { width: 240, height: 4, backgroundColor: '#fcce01', marginBottom: 48 },
  '@media (max-width: 768px)': {
    line: { marginBottom: 32 },
  },
}));

function Line({ className }) {
  const classes = useStyles();
  return (
    <ScrollParallax
      animation={[
        { width: 0, translateX: 240, playScale: [0, 0.3] },
        { width: 0, translateX: 0, playScale: [0, 0.1] },
        { width: 240, translateX: 0, playScale: [0, 0.3] },
        { width: 0, translateX: 240, playScale: [0, 0.3] },
      ]}
      style={{ width: 240, transform: 'translateX(0px)' }}
      className={classNames(classes.line, className)}
    />
  );
}

Line.propTypes = {
  className: PropTypes.string,
};

export default Line;
