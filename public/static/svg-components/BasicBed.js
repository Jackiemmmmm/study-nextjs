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
const SvgBasicBed = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <path
        d="M12.21 1.75c.92 0 1.67.7 1.74 1.6l.01.15v3.84c.46.18.79.63.79 1.16v5a.75.75 0 01-1.5.1v-1.35H2.75v1.25a.75.75 0 01-1.5.1V8.5c0-.53.33-.99.8-1.17V3.5c0-.92.7-1.67 1.6-1.74l.15-.01h8.41zm1.04 7H2.75v2h10.5v-2zm-1.04-5.5H3.8a.25.25 0 00-.24.2l-.01.05v3.75h.7V5.7c0-.65.5-1.18 1.12-1.24l.13-.01h5c.65 0 1.18.5 1.24 1.12l.01.13v1.55h.7l.01-3.75a.25.25 0 00-.2-.24l-.05-.01zm-1.96 2.7h-4.5v1.3h4.5v-1.3z"
        fillRule="evenodd"
      />
    </svg>
  );
});
SvgBasicBed.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgBasicBed.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgBasicBed;
