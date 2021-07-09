import { makeStyles, useTheme } from '@material-ui/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
const useStyles = makeStyles({
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
  },
});
const SvgIconUniversities = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <path d="M31.653 5.336a2 2 0 012.218 0l30.762 20.508c.099.065.189.137.27.215a2.002 2.002 0 011.418 1.766l.005.15V49.04l-.003.076a7.397 7.397 0 11-3.993.057l-.004-.133V30.71l-7.057 4.704v15.645a2 2 0 01-.755 1.565l-.134.098-20.508 13.686a2 2 0 01-2.073.09l-.147-.09-20.508-13.686a2 2 0 01-.883-1.497l-.007-.166-.001-15.645-9.362-6.242a2 2 0 01-.132-3.233l.132-.095zm-17.4 32.744v11.908l18.509 12.351 18.507-12.35V38.081L33.871 49.68a2 2 0 01-2.072.09l-.146-.09-17.4-11.6zm50.176 14.791a3.397 3.397 0 100 6.794 3.397 3.397 0 000-6.794zM32.762 9.404L5.606 27.508l27.156 18.103 24.32-16.213h-24.05a2 2 0 01-.15-3.994l.15-.006h23.72L32.762 9.404z" />
    </svg>
  );
});
SvgIconUniversities.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgIconUniversities.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgIconUniversities;
