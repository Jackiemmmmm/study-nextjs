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
const SvgIconLanguages = React.forwardRef((props, ref) => {
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
      <path d="M23.892 46.097a2 2 0 012.447-.078 15.326 15.326 0 016.356 12.439V67a2 2 0 01-2 2H4a2 2 0 01-2-2v-8.542c0-4.985 2.395-9.572 6.356-12.44a2 2 0 012.447.08 10.226 10.226 0 006.544 2.351c2.425 0 4.715-.84 6.545-2.352zm1.202 4.069l-.252.16a14.226 14.226 0 01-7.495 2.123c-2.69 0-5.27-.748-7.494-2.123l-.253-.16-.185.177a11.313 11.313 0 00-3.41 7.77L6 58.458V65h22.694v-6.542c0-3.112-1.259-6.01-3.414-8.115l-.186-.177zm19.567-11.088a2 2 0 012.448.078 10.226 10.226 0 006.544 2.352c2.424 0 4.714-.84 6.544-2.351a2 2 0 012.447-.079A15.326 15.326 0 0169 51.517v8.542a2 2 0 01-2 2H40.305a2 2 0 01-2-2v-8.542c0-4.985 2.396-9.572 6.356-12.44zM61.4 43.225l-.252.16a14.226 14.226 0 01-7.494 2.123c-2.691 0-5.27-.748-7.495-2.122l-.253-.161-.185.177a11.313 11.313 0 00-3.41 7.77l-.005.345v6.542h22.694L65 51.517c0-3.112-1.26-6.01-3.415-8.115l-.186-.177zM17.881 30.297a7.339 7.339 0 110 14.678 7.339 7.339 0 010-14.678zm0 4a3.339 3.339 0 100 6.678 3.339 3.339 0 000-6.678zm36.305-10.941a7.339 7.339 0 110 14.678 7.339 7.339 0 010-14.678zm0 4a3.339 3.339 0 100 6.678 3.339 3.339 0 000-6.678zM23.89 8.94a4 4 0 014 4v7.212a4 4 0 01-4 4l-9.27-.001v3.51c0 1.763-2.097 2.64-3.353 1.474l-.108-.108-4.557-4.876H6a4 4 0 01-3.995-3.8l-.005-.2v-7.211a4 4 0 014-4zM65 2a4 4 0 014 4v7.212l-.005.2a4 4 0 01-3.995 3.8l-.602-.001-4.557 4.876-.108.108c-1.256 1.167-3.353.29-3.353-1.473V17.21h-9.27a4 4 0 01-4-4V6a4 4 0 014-4H65zM23.89 12.94H6v7.213h1.47a2 2 0 011.461.634l1.689 1.806v-.44a2 2 0 011.85-1.995l.15-.005h11.27V12.94zM65 6H47.11v7.212h11.27l.15.005a2 2 0 011.85 1.995v.441l1.689-1.807a2 2 0 011.46-.634H65V6z" />
    </svg>
  );
});
SvgIconLanguages.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgIconLanguages.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgIconLanguages;
