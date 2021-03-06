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
const SvgPicUniversity = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      viewBox="0 0 424 153"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#8AA4A8"
          d="M41.123 67.322l6.034-8.302 5.431 8.302 6.034-8.302 5.431 8.302 6.035-8.302 5.43 8.302V21.425h24.138V75.03h77.843v76.192H41.123z"
        />
        <path fill="#FFF" d="M15.2 95.23h26.177v28.168H15.2z" />
        <path
          d="M177.5 72.804c0-6.85-6.056-12.404-13.526-12.404s-13.525 5.554-13.525 12.404h27.05z"
          fill="#8AA4A8"
        />
        <path d="M83.952 122.74V85.354h21.523V98.91h14.543v23.83H83.952z" fill="#E9E8E6" />
        <path
          d="M102.887 104.667v3.383H99.73v-3.383h3.156zm6.311 0v3.383h-3.156v-3.383h3.156zm6.312 0v3.383h-3.156v-3.383h3.156z"
          fill="#8AA4A8"
        />
        <path
          d="M48.645 72.804v3.383h-3.014v-3.383h3.014zm11.455 0v3.383h-3.015v-3.383H60.1zm11.454 0v3.383H68.54v-3.383h3.014zm12.398-32.411c1.127 0 1.878.564 2.254 1.691v8.457h-4.508v-8.457c.375-1.127 1.127-1.691 2.254-1.691zm6.762 0c1.127 0 1.879.564 2.254 1.691v8.457H88.46v-8.457c.376-1.127 1.127-1.691 2.254-1.691z"
          fill="#B8D9D0"
        />
        <path
          d="M86.713 0c0 3.594 8.059 4.872 8.059 10.184 0 1.682-.56 2.88-1.679 3.595h6.638v5.39H74.935v-5.39h6.583c-1.083-.72-1.624-1.919-1.624-3.595 0-5.383 6.819-6.59 6.819-10.184z"
          fill="#8AA4A8"
        />
        <path fill="#FFEDE4" d="M24.509 85.715h26.448l-9.308 9.642H15.2z" />
        <path fill="#E7E7E7" d="M50.957 85.715l9.58 9.681v27.852h-19.16V95.396z" />
        <path fill="#F8A588" d="M50.957 85.715l9.58 9.681h-19.16z" />
        <path
          d="M168.482 60.964c0-1.868-1.766-3.383-3.944-3.383-2.179 0-3.945 1.515-3.945 3.383h7.89z"
          fill="#8AA4A8"
        />
        <path
          d="M170.737 103.117v1.26h-15.965l-1.183-1.26h17.148zm0-5.04v1.26l-20.695-.001-1.182-1.26h21.877zm0-5.042v1.26h-25.425l-1.182-1.26h26.607zm0-5.041v1.26h-30.155l-1.182-1.26h31.337zm0-5.041v1.26h-34.885l-1.182-1.26h36.067z"
          fill="#B8D9D0"
        />
        <path
          fill="#FFF8DA"
          d="M.803 111.734H136.27v7.992h8.017l.006 7.992h8.01l.013 7.992h8.005l.018 7.992h7.998l.025 7.992-167.559.093z"
        />
        <g transform="translate(271.981 27.939)">
          <path
            d="M75.555 84.671c7.967 0 14.672 5.408 16.652 12.756l.291-.01.303-.004c6.577 0 11.908 5.336 11.908 11.92v13.974H41.062v-13.974h.063a16.797 16.797 0 01-1.705-7.399c0-9.307 7.537-16.852 16.835-16.852 3.434 0 6.627 1.029 9.289 2.795a17.146 17.146 0 0110.01-3.206z"
            fill="#8AA4A8"
          />
          <path
            d="M127.71 92.365c6.37 0 11.731 4.324 13.314 10.2l.204-.009.27-.004c5.26 0 9.522 4.267 9.522 9.53v11.174h-50.888v-11.174h.05a13.43 13.43 0 01-1.363-5.915c0-7.441 6.027-13.473 13.46-13.473 2.746 0 5.299.822 7.427 2.234a13.708 13.708 0 018.004-2.563z"
            fill="#E4F4F3"
          />
          <path
            fill="#8AA4A8"
            d="M35.108 0l5.544 17.263H29.565zm-5.543 18.496h11.087v7.398H29.565zM26.28 36.581h17.657v86.726H26.28zm3.285-9.453h11.087l3.285 8.22H26.28z"
          />
          <rect fill="#B8D9D0" x={29.565} y={39.047} width={1.232} height={6.576} rx={0.616} />
          <rect fill="#B8D9D0" x={32.85} y={39.047} width={1.232} height={6.576} rx={0.616} />
          <rect fill="#B8D9D0" x={36.135} y={39.047} width={1.232} height={6.576} rx={0.616} />
          <rect fill="#B8D9D0" x={39.42} y={39.047} width={1.232} height={6.576} rx={0.616} />
          <ellipse fill="#B8D9D0" cx={35.314} cy={55.077} rx={5.338} ry={5.343} />
          <path fill="#FFF" d="M0 85.326h36.135v2.055H0zm0 5.343h36.135v33.293H0z" />
          <rect fill="#B8D9D0" x={3.696} y={94.536} width={1.232} height={21.373} rx={0.616} />
          <rect fill="#B8D9D0" x={9.034} y={94.536} width={1.232} height={21.373} rx={0.616} />
          <rect fill="#B8D9D0" x={14.782} y={94.536} width={1.232} height={21.373} rx={0.616} />
          <rect fill="#B8D9D0" x={20.121} y={94.536} width={1.232} height={21.373} rx={0.616} />
          <rect fill="#B8D9D0" x={25.869} y={94.536} width={1.232} height={21.373} rx={0.616} />
          <rect fill="#B8D9D0" x={31.207} y={94.536} width={1.232} height={21.373} rx={0.616} />
        </g>
        <path
          d="M202.652 120.585c6.472 0 11.9 4.479 13.358 10.508a9.37 9.37 0 01.712-.026c5.132 0 9.312 4.076 9.484 9.17h.006v11.137h-51.046V140.46a13.387 13.387 0 01-1.309-5.792c0-7.416 6.006-13.429 13.416-13.429 2.634 0 5.091.76 7.164 2.074a13.667 13.667 0 018.215-2.729z"
          fill="#E4F4F3"
        />
        <path
          d="M414.067 62.478l.526 10.41a6.22 6.22 0 015.85 6.212 6.225 6.225 0 01-4.694 6.035l.043 2.422h1.782v1.596l-1.754-.001.011.638 1.743.001v1.596l-1.714-.001 1.076 59.888h-5.42l.806-59.888h-1.762v-1.595l1.783-.001.01-.638h-1.793v-1.595h1.813l.034-2.505a6.226 6.226 0 01-4.394-5.724l-.004-.228a6.222 6.222 0 015.532-6.186l.526-10.436z"
          fill="#8AA4A8"
        />
        <path
          d="M282.493 133.6c3.661 0 6.738 2.508 7.607 5.901l.03-.002.216-.004a5.238 5.238 0 015.235 5.24v6.551h-28.14v-5.253a7.504 7.504 0 01-1.31-4.245c0-4.16 3.37-7.534 7.527-7.534 1.428 0 2.763.399 3.9 1.09a7.816 7.816 0 014.935-1.745z"
          fill="#E4F4F3"
        />
        <path fill="#E9E8E6" d="M236.682 96.584h12.435l6.544 11.325v42.955h-25.523v-42.955z" />
        <path
          d="M239.037 114.838v3.383h-3.156v-3.383h3.156zm6.311 0v3.383h-3.156v-3.383h3.156zm6.312 0v3.383h-3.156v-3.383h3.156zm-23.812 18.19c4.015 0 7.405 2.781 8.48 6.588a6.22 6.22 0 016.9 6.186l-.005-.196.004.001v6.418h-35.994V142.2c.178-4.732 4.065-8.516 8.835-8.516 2.115 0 4.057.745 5.578 1.986 1.595-1.633 3.785-2.64 6.202-2.64z"
          fill="#8AA4A8"
        />
        <path fill="#FFF" d="M250.644 120.166h16.87v31.653h-16.87z" />
      </g>
    </svg>
  );
});
SvgPicUniversity.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgPicUniversity.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgPicUniversity;
