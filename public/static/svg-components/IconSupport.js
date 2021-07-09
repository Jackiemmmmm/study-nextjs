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
const SvgIconSupport = React.forwardRef((props, ref) => {
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
      <path
        d="M23.207 27.082c-5.44 6.046-6.476 15.272-2.558 22.543a2.1 2.1 0 01-.883 2.788c-.999.539-2.245.186-2.822-.813-4.748-8.809-3.49-19.96 3.142-27.324 8.264-9.187 21.96-9.436 30.514-.555 7.765 8.07 8.66 21.003 2.245 30.163a7.202 7.202 0 002.777 1.242 2.1 2.1 0 011.496 1.226 2.11 2.11 0 01-.155 1.952l-.112.163-.111.132-.37.33a29.225 29.225 0 01-13.806 5.1l-.063.006c-.91.089-1.832.132-2.773.132a2.1 2.1 0 110-4.2c.792 0 1.583-.037 2.35-.11l.06-.007a24.839 24.839 0 008.476-2.4c-.585-.404-1.104-.844-1.496-1.278-1.281-.566-1.784-2.136-.787-3.307 6.378-7.502 6.045-19.162-.756-26.23-6.861-7.125-17.734-6.926-24.368.447zm2.479 15.389a2.092 2.092 0 012.948.243 9.065 9.065 0 006.932 3.208c2.72 0 5.26-1.198 6.985-3.268a2.091 2.091 0 113.222 2.665 13.246 13.246 0 01-10.207 4.785c-3.898.003-7.6-1.71-10.119-4.684a2.089 2.089 0 01.239-2.95zM35.74 8c14.3.083 24.972 8.423 28.37 21.723l.046.138a9.471 9.471 0 01-2.955 18.29l-.63.032v-.63l.022-15.637c-3.47-12.805-11.496-19.885-25.028-19.885-14.481 0-25.94 12.03-25.94 26.662 0 10.88 3.484 15.939 11.765 17.925l.13-.043a3.864 3.864 0 012.862-1.26h5.591a3.88 3.88 0 010 7.76h-5.591c-1.626 0-3.079-1.015-3.471-2.295l-.06-.147c-8.008-1.809-12.37-5.65-14.248-12.847l-.088-.094a9.475 9.475 0 01-6.513-9.222c.099-4.233 2.994-7.886 6.83-8.805l.204-.192C11.272 16.341 21.974 7.92 35.741 8.001z"
        fillRule="evenodd"
      />
    </svg>
  );
});
SvgIconSupport.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgIconSupport.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgIconSupport;
