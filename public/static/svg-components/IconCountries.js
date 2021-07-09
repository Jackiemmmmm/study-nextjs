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
const SvgIconCountries = React.forwardRef((props, ref) => {
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
      <path d="M36 2c15.464 0 28 12.536 28 28 0 13.174-9.013 26.393-26.8 39.733a2 2 0 01-2.4 0C17.013 56.393 8 43.173 8 30 8 14.536 20.536 2 36 2zm0 4C22.745 6 12 16.745 12 30c0 11.28 7.774 23.06 23.54 35.269l.46.353 1.006-.779c15.22-11.916 22.816-23.422 22.99-34.454L60 30C60 16.745 49.255 6 36 6zm0 43.333c-10.678 0-19.333-8.655-19.333-19.333 0-10.678 8.655-19.333 19.333-19.333 10.678 0 19.333 8.655 19.333 19.333 0 10.678-8.655 19.333-19.333 19.333h.001zm0-9.75c-.966 0-1.924.049-2.874.144.167.668.351 1.295.552 1.88.473 1.374 1.013 2.436 1.555 3.103.38.468.642.623.767.623s.387-.155.767-.623c.542-.667 1.082-1.729 1.555-3.104.2-.584.385-1.212.553-1.877A28.13 28.13 0 0036 39.583zm-6.847.834l-.43.109a28.08 28.08 0 00-2.903.94 15.33 15.33 0 004.59 2.816c-.492-1.138-.913-2.438-1.257-3.865zm13.694-.001l-.075.304a23.495 23.495 0 01-1.182 3.562 15.322 15.322 0 004.59-2.815 27.96 27.96 0 00-3.333-1.051zM28.077 32h-7.281a15.24 15.24 0 002.288 6.267 32.072 32.072 0 015.354-1.794 48.893 48.893 0 01-.36-4.473zm23.127 0h-7.281a48.867 48.867 0 01-.361 4.474 31.98 31.98 0 015.325 1.78l.03.013a15.24 15.24 0 002.287-6.266zm-11.287.001h-7.834c.054 1.307.16 2.575.314 3.781a32.609 32.609 0 017.206 0c.154-1.205.26-2.474.314-3.781zM23.084 21.734l-.12.19A15.237 15.237 0 0020.796 28h7.281c.056-1.552.178-3.05.36-4.473a32.065 32.065 0 01-5.353-1.793zm16.52 2.483l-.068.008a32.674 32.674 0 01-7.139-.007A44.198 44.198 0 0032.083 28h7.834a44.476 44.476 0 00-.314-3.783zm9.311-2.485l-.399.173a32.078 32.078 0 01-4.954 1.622 48.7 48.7 0 01.36 4.474h7.282a15.24 15.24 0 00-2.289-6.269zM36 14.667c-.125 0-.387.155-.767.623-.542.667-1.082 1.729-1.555 3.104-.2.584-.385 1.212-.553 1.877a28.692 28.692 0 005.748.002 22.659 22.659 0 00-.551-1.88c-.473-1.374-1.013-2.436-1.555-3.103-.38-.468-.642-.623-.767-.623zm-5.59 1.051l-.102.04a15.335 15.335 0 00-4.488 2.775c1.087.42 2.2.77 3.333 1.051.344-1.428.765-2.727 1.257-3.866zm11.18 0l.037.085c.476 1.118.884 2.388 1.22 3.78 1.133-.28 2.246-.63 3.333-1.05a15.32 15.32 0 00-4.59-2.815z" />
    </svg>
  );
});
SvgIconCountries.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgIconCountries.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgIconCountries;
