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
const SvgIconArrow = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      viewBox="0 0 16 12"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <path
        d="M11.107.529l4.364 4.364a1.31 1.31 0 010 1.85l-4.364 4.364a1.31 1.31 0 11-1.85-1.85l2.127-2.13h-9.93a1.31 1.31 0 010-2.618h9.93L9.256 2.38A1.31 1.31 0 0111.107.53z"
        fillRule="evenodd"
      />
    </svg>
  );
});
SvgIconArrow.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgIconArrow.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgIconArrow;
