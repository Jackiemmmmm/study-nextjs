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
const SvgIconBeds = React.forwardRef((props, ref) => {
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
      <path d="M6.667 10a5.667 5.667 0 015.666 5.667v10.745a9.054 9.054 0 014.548-1.222 9.066 9.066 0 017.764 4.377 8.276 8.276 0 016.387-3.325l.254-.004h23.571c1.8 0 3.467.574 4.826 1.55v-1.126a5.574 5.574 0 015.354-5.57l.22-.003a5.574 5.574 0 015.573 5.573v35.005H58.635l-.001-13.454H12.333v13.454H1v-46A5.667 5.667 0 016.667 10zm0 4C5.747 14 5 14.746 5 15.667v41.999h3.333V44.214h54.302l-.001 13.452h4.195V26.662c0-.82-.628-1.495-1.43-1.567l-.143-.006c-.869 0-1.574.704-1.574 1.573V36.94H8.333V15.667c0-.92-.746-1.667-1.666-1.667zM16.88 29.19a5.071 5.071 0 00-4.52 2.77l-.028.055v.923h9.445a5.074 5.074 0 00-4.897-3.748zm37.976 1.048H31.286a4.287 4.287 0 00-3.983 2.7h31.536a4.286 4.286 0 00-3.774-2.695l-.208-.005z" />
    </svg>
  );
});
SvgIconBeds.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgIconBeds.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgIconBeds;
