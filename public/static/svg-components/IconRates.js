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
const SvgIconRates = React.forwardRef((props, ref) => {
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
      <path d="M25.266 23.227L5.279 26.132l-.151.028c-1.529.336-2.108 2.263-.958 3.384L18.633 43.64l-3.413 19.91-.02.147c-.157 1.56 1.499 2.709 2.922 1.96L36 56.26l17.878 9.4.134.064c1.436.631 3.04-.588 2.768-2.173l-3.414-19.909L67.83 29.544l.106-.111c1.039-1.17.375-3.07-1.215-3.3l-19.988-2.906-8.94-18.112c-.733-1.487-2.853-1.487-3.586 0l-8.941 18.112zM36 10.519l7.611 15.422.078.144a2 2 0 001.428.95l17.019 2.472-12.315 12.005-.113.12a2 2 0 00-.462 1.65l2.906 16.95-15.221-8.002-.162-.076a2 2 0 00-1.7.076l-15.222 8.002 2.907-16.95.021-.162a2 2 0 00-.596-1.608L9.863 29.507l17.02-2.472a2 2 0 001.506-1.094L36 10.519z" />
    </svg>
  );
});
SvgIconRates.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgIconRates.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgIconRates;
