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
const SvgPicGroupbookings = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const { color, className } = props;
  return (
    <svg
      {...props}
      viewBox="0 0 256 205"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={classnames(classes.root, className)}
      color={theme.colors[color] ?? color}
      ref={ref}
    >
      <defs>
        <path
          d="M116.308 145.099c66.807 0 102.876-28.419 102.876-79.957C219.184 28.612 197.523 0 173.379 0c-29.58 0-46.995 69.988-79.038 69.988-37.412 0-12.776-59.767-68.202-50.191C10.001 22.585 0 37.782 0 57.927 0 109.496 44.105 145.1 116.308 145.1z"
          id="pic-group_bookings_svg__a"
        />
        <path
          d="M12.168 25.161c5.212 0 9.436-4.608 9.436-10.293S17.38 0 12.168 0c-5.21 0-9.435 9.183-9.435 14.868 0 5.685 4.224 10.293 9.435 10.293z"
          id="pic-group_bookings_svg__f"
        />
        <path
          d="M30.41 39.63c-2.341-8.807-5.66-13.21-9.956-13.21-6.443 0-4.127 8.085-6.897 8.761-2.77.676-3.157-5.384-6.946-5.384-3.789 0-6.394 4.96-6.394 9.832H30.41z"
          id="pic-group_bookings_svg__h"
        />
        <path
          d="M12.168 25.161c5.212 0 9.436-4.608 9.436-10.293S17.38 0 12.168 0c-5.21 0-9.435 9.183-9.435 14.868 0 5.685 4.224 10.293 9.435 10.293z"
          id="pic-group_bookings_svg__j"
        />
        <path
          d="M30.41 39.63c-2.341-8.807-5.66-13.21-9.956-13.21-6.443 0-4.127 8.085-6.897 8.761-2.77.676-3.157-5.384-6.946-5.384-3.789 0-6.394 4.96-6.394 9.832H30.41z"
          id="pic-group_bookings_svg__l"
        />
        <path id="pic-group_bookings_svg__n" d="M0 .139h40.843v39.913H0z" />
        <path
          d="M29.512 36.296H0v-22.18C0 6.32 6.607 0 14.756 0c8.15 0 14.756 6.32 14.756 14.115v22.18z"
          id="pic-group_bookings_svg__p"
        />
        <filter
          x="-2.6%"
          y="-2%"
          width="105.3%"
          height="104%"
          filterUnits="objectBoundingBox"
          id="pic-group_bookings_svg__g"
        >
          <feOffset dx={-1} dy={1} in="SourceAlpha" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0.730814201 0 0 0 0 0.459985976 0 0 0 0 0 0 0 0 0.349524457 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-1.7%"
          y="-3.8%"
          width="103.3%"
          height="107.6%"
          filterUnits="objectBoundingBox"
          id="pic-group_bookings_svg__i"
        >
          <feOffset dx={-1} dy={1} in="SourceAlpha" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0.730814201 0 0 0 0 0.459985976 0 0 0 0 0 0 0 0 0.349524457 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-2.6%"
          y="-2%"
          width="105.3%"
          height="104%"
          filterUnits="objectBoundingBox"
          id="pic-group_bookings_svg__k"
        >
          <feOffset dx={-1} dy={1} in="SourceAlpha" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0.730814201 0 0 0 0 0.459985976 0 0 0 0 0 0 0 0 0.349524457 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-1.7%"
          y="-3.8%"
          width="103.3%"
          height="107.6%"
          filterUnits="objectBoundingBox"
          id="pic-group_bookings_svg__m"
        >
          <feOffset dx={-1} dy={1} in="SourceAlpha" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0.730814201 0 0 0 0 0.459985976 0 0 0 0 0 0 0 0 0.349524457 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-3.4%"
          y="-2.8%"
          width="106.8%"
          height="105.5%"
          filterUnits="objectBoundingBox"
          id="pic-group_bookings_svg__q"
        >
          <feOffset dx={-2} dy={1} in="SourceAlpha" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0.730814201 0 0 0 0 0.459985976 0 0 0 0 0 0 0 0 0.4747226 0"
            in="shadowInnerInner1"
          />
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pic-group_bookings_svg__c">
          <stop stopColor="#FAD961" offset="0%" />
          <stop stopColor="#FCCE01" stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pic-group_bookings_svg__d">
          <stop stopColor="#FAD961" offset="0%" />
          <stop stopColor="#FCCE01" stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pic-group_bookings_svg__e">
          <stop stopColor="#FAD961" offset="0%" />
          <stop stopColor="#FCCE01" stopOpacity={0} offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M87.516 150.75c20.232 28.475 158.033 42.156 167.934 4.628 5.597-21.21-32.531-52.09-69.253-61.958-86.987-23.373-126.356 18.38-98.68 57.33z"
          fill="#E2F4F2"
        />
        <g transform="translate(0 59.13)">
          <mask id="pic-group_bookings_svg__b" fill="#fff">
            <use xlinkHref="#pic-group_bookings_svg__a" />
          </mask>
          <use fill="#FFF8DA" xlinkHref="#pic-group_bookings_svg__a" />
          <g mask="url(#pic-group_bookings_svg__b)">
            <path fill="#F0DAA3" d="M8.828 124.821h201.204v33.263H8.828z" />
            <path
              d="M31.341 11.088v100.174H8.708V11.088h22.633zm-14.294 8.39h-3.574v91.612h3.574V19.478zm8.338 0h-3.574v91.612h3.574V19.478z"
              fill="url(#pic-group_bookings_svg__c)"
              opacity={0.475}
              transform="translate(4.547 17.455)"
            />
            <path
              d="M57.027 30.437v87.503H51.07V38.827h-3.574v79.111h-4.765V38.83h-3.574v79.11h-4.764V30.438h22.633z"
              fill="url(#pic-group_bookings_svg__d)"
              opacity={0.397}
              transform="translate(4.547 17.455)"
            />
            <path
              d="M153.066.47v114.173h-4.468V12.158h-3.573v102.485h-3.574V12.158h-3.573v102.485h-3.574V.471h18.762z"
              fill="url(#pic-group_bookings_svg__e)"
              opacity={0.286}
              transform="translate(4.547 17.455)"
            />
            <g opacity={0.574}>
              <g transform="translate(5.255 85.565)">
                <use fill="#38B2A6" xlinkHref="#pic-group_bookings_svg__f" />
                <use
                  fill="#000"
                  filter="url(#pic-group_bookings_svg__g)"
                  xlinkHref="#pic-group_bookings_svg__f"
                />
              </g>
              <path
                d="M17.423 94.371c.348 0 .63.384.63.858v28.479c0 .473-.282.857-.63.857-.347 0-.629-.384-.629-.857v-23.38l-2.85-2.357c-.303-.25-.386-.759-.185-1.136.2-.377.608-.48.91-.23l2.125 1.756V95.23c0-.474.282-.858.63-.858z"
                fill="#4C4C4C"
                fillRule="nonzero"
                opacity={0.458}
              />
              <g transform="translate(5.255 85.565)">
                <use fill="#38B2A6" xlinkHref="#pic-group_bookings_svg__h" />
                <use
                  fill="#000"
                  filter="url(#pic-group_bookings_svg__i)"
                  xlinkHref="#pic-group_bookings_svg__h"
                />
              </g>
            </g>
            <g opacity={0.574}>
              <g transform="translate(165.362 85.565)">
                <use fill="#38B2A6" xlinkHref="#pic-group_bookings_svg__j" />
                <use
                  fill="#000"
                  filter="url(#pic-group_bookings_svg__k)"
                  xlinkHref="#pic-group_bookings_svg__j"
                />
              </g>
              <path
                d="M177.53 94.371c.348 0 .63.384.63.858v28.479c0 .473-.282.857-.63.857-.347 0-.629-.384-.629-.857v-23.38l-2.85-2.357c-.303-.25-.386-.759-.185-1.136.2-.377.608-.48.91-.23l2.125 1.756V95.23c0-.474.282-.858.63-.858z"
                fill="#4C4C4C"
                fillRule="nonzero"
                opacity={0.458}
              />
              <g transform="translate(165.362 85.565)">
                <use fill="#38B2A6" xlinkHref="#pic-group_bookings_svg__l" />
                <use
                  fill="#000"
                  filter="url(#pic-group_bookings_svg__m)"
                  xlinkHref="#pic-group_bookings_svg__l"
                />
              </g>
            </g>
            <path
              fill="#D1CCB7"
              d="M66.361 62.539l-36.33 21.816v7.789h3.892v17.604H30.03v15.671h36.331z"
            />
            <path fillOpacity={0.461} fill="#FFF" d="M38.904 90.136h19.563v19.563H38.904z" />
            <path fill="#63656A" d="M62.173 56.6v8.662L30.03 84.249v-7.183z" />
          </g>
        </g>
        <g transform="rotate(-10 169.963 -659.421)">
          <mask id="pic-group_bookings_svg__o" fill="#fff">
            <use xlinkHref="#pic-group_bookings_svg__n" />
          </mask>
          <path
            d="M40.3 17.39L23.872 1.703a4.668 4.668 0 00-.506-.483l-.161-.154-.017.007a4.596 4.596 0 00-2.767-.934 4.596 4.596 0 00-2.768.934l-.018-.007-.161.154c-.18.15-.35.309-.505.483L.543 17.39C.18 17.754 0 18.23 0 18.705v18.562a2.784 2.784 0 002.784 2.785h35.274a2.785 2.785 0 002.785-2.785V18.705c0-.475-.181-.951-.544-1.315"
            fill="#F3AA06"
            mask="url(#pic-group_bookings_svg__o)"
          />
        </g>
        <path
          d="M150.234 36.413a9.282 9.282 0 01-7.529 10.753 9.282 9.282 0 11-3.223-18.283 9.283 9.283 0 0110.752 7.53z"
          stroke="#2094F1"
          strokeWidth={0.114}
        />
        <path
          d="M160.557 46.846L156.85 25.82l-11.83-8.283-21.937 3.869a2.785 2.785 0 00-2.26 3.225l4.997 28.339 34.737-6.125z"
          fill="#F8F8F6"
        />
        <path
          d="M161.524 52.33l-34.737 6.126a2.784 2.784 0 01-3.226-2.26l-3.224-18.282 41.187 14.417z"
          fill="#FFBF0D"
        />
        <path
          d="M126.787 58.456l34.737-6.125a2.784 2.784 0 002.259-3.227l-3.224-18.283-33.772 27.635z"
          fill="#FCCE01"
        />
        <path
          d="M145.02 17.538l1.29 7.313a2.786 2.786 0 003.227 2.26l7.312-1.29-11.828-8.283z"
          fill="#C8C9CB"
        />
        <path
          fill="#E7E7E7"
          d="M129.156 34.474l22.854-4.03-.323-1.828-22.853 4.03zm.645 3.657l22.854-4.03-.323-1.829-22.854 4.03zm-1.29-7.313l13.712-2.418-.322-1.829-13.712 2.418z"
        />
        <path
          d="M206.956 129.627l-51.314-10.838a6.8 6.8 0 01-5.249-8.059l8.47-40.104 64.623 13.649-8.47 40.104a6.8 6.8 0 01-8.06 5.248"
          fill="#FFF"
        />
        <path
          fill="#C8C9CB"
          d="M199.797 121.909l.456.096 7.606-36.01 8.059 1.701-7.51 35.555-8.515-1.798-.096.456.456.096-.456-.096-.096.456 9.427 1.991 7.895-37.379-9.883-2.088-7.895 37.38.456.096.096-.456"
        />
        <path
          fill="#C8C9CB"
          d="M208.768 123.804l.096-.457-52.321-11.05 7.51-35.555 51.865 10.954-7.606 36.011.456.097.096-.457-.096.457.456.096 7.799-36.923-53.69-11.34-7.895 37.379 53.69 11.34.096-.456-.456-.096"
        />
        <path
          fill="#C8C9CB"
          d="M214.575 96.308l.097-.457-52.322-11.05 1.702-8.06 51.866 10.955-1.799 8.515.456.097.097-.457-.097.457.456.096 1.992-9.427-53.69-11.34-2.088 9.883 53.69 11.34.096-.456-.456-.096m-3.859 18.272l.096-.456-52.321-11.052 1.702-8.058 51.865 10.954-1.798 8.515.456.097.096-.456-.096.456.456.096 1.991-9.427-53.69-11.34-2.087 9.883 53.69 11.34.096-.456-.456-.096"
        />
        <path
          fill="#C8C9CB"
          d="M182.367 118.227l.456.096 7.606-36.01 8.059 1.702-7.51 35.554-8.515-1.798-.096.456.456.096-.456-.096-.097.456 9.428 1.991 7.895-37.379-9.884-2.087-7.895 37.378.456.097.097-.456m-17.475-3.69l.456.095 7.606-36.01 8.058 1.702-7.509 35.554-8.515-1.798-.096.456.456.096-.456-.096-.096.456 9.427 1.991 7.894-37.378-9.883-2.088-7.894 37.379.456.096.096-.456"
        />
        <path
          d="M223.486 84.275l-64.622-13.65 1.715-8.118a3.643 3.643 0 014.317-2.812L222.39 71.84a3.643 3.643 0 012.81 4.317l-1.714 8.119"
          fill="#38B2A6"
        />
        <path
          d="M218.394 75.674a2.301 2.301 0 11-4.504-.95 2.301 2.301 0 014.504.95"
          fill="#2B948A"
        />
        <path
          d="M215.205 74.253l1.096-5.188a1.111 1.111 0 112.175.46l-1.096 5.187a1.112 1.112 0 01-2.175-.459z"
          fill="#E2F4F2"
        />
        <path
          d="M171.22 65.71a2.303 2.303 0 11-4.506-.952 2.303 2.303 0 014.507.952"
          fill="#2B948A"
        />
        <path
          d="M168.032 64.29l1.095-5.188a1.11 1.11 0 112.175.459l-1.096 5.188a1.11 1.11 0 11-2.174-.46z"
          fill="#E2F4F2"
        />
        <path
          d="M183.191 68.239a2.303 2.303 0 11-4.505-.953 2.303 2.303 0 014.505.953"
          fill="#2B948A"
        />
        <path
          d="M180.002 66.818l1.096-5.188a1.111 1.111 0 112.175.46l-1.096 5.187a1.111 1.111 0 01-2.175-.46z"
          fill="#E2F4F2"
        />
        <path
          d="M206.782 73.221a2.301 2.301 0 11-4.503-.95 2.301 2.301 0 014.503.95"
          fill="#2B948A"
        />
        <path
          d="M203.594 71.8l1.096-5.187a1.111 1.111 0 112.174.46l-1.096 5.187a1.111 1.111 0 01-2.174-.46z"
          fill="#E2F4F2"
        />
        <path
          d="M211.584 100.59a2.644 2.644 0 11-5.173-1.093 2.644 2.644 0 015.173 1.093m-35.103-7.706a2.644 2.644 0 11-5.173-1.093 2.644 2.644 0 015.173 1.093m-12.415 16.696a2.644 2.644 0 11-5.173-1.093 2.644 2.644 0 015.173 1.093"
          fill="#FCCE01"
        />
        <path
          d="M207.832 118.895l-.228-.048a2.41 2.41 0 11-4.716-.995 2.41 2.41 0 014.716.995l.228.048.228.048a2.877 2.877 0 10-5.628-1.187 2.877 2.877 0 005.628 1.187l-.228-.048m-20.291-33.049l-.228-.048a2.41 2.41 0 11-4.717-.995 2.41 2.41 0 014.717.995l.228.048.228.048a2.877 2.877 0 10-5.628-1.187 2.877 2.877 0 005.628 1.187l-.228-.048"
          fill="#38B2A6"
        />
        <g fill="#E7E7E7">
          <path d="M233.968 73.074l7.094.662a1.134 1.134 0 11-.21 2.26l-7.094-.662a1.134 1.134 0 11.21-2.26zm4.926-10.403c.4.483.333 1.199-.149 1.599l-5.488 4.55a1.137 1.137 0 01-1.599-.149 1.137 1.137 0 01.15-1.6l5.487-4.549c.484-.4 1.2-.333 1.6.149zm-11.405-5.302a1.135 1.135 0 011.025 1.235l-.659 7.096a1.134 1.134 0 11-2.26-.21l.658-7.095a1.142 1.142 0 011.236-1.026z" />
        </g>
        <g fill="#E7E7E7">
          <path d="M76.592 16.326a1.134 1.134 0 01-1.108 1.161l-7.127.17h-.027a1.134 1.134 0 01-.027-2.269l7.127-.17c.621-.047 1.148.48 1.162 1.108zM72.736 4.569l5.158 4.92a1.136 1.136 0 01-1.567 1.642l-5.159-4.92a1.134 1.134 0 111.568-1.642zM82.975 0c.67-.027 1.146.481 1.162 1.108l.169 7.124a1.136 1.136 0 01-1.11 1.161h-.026c-.614 0-1.12-.49-1.133-1.107l-.169-7.125a1.134 1.134 0 011.107-1.16z" />
        </g>
        <g>
          <path fill="#E3DECC" d="M95.94 55.763L61.885 81.707v102.506h69.528V81.707z" />
          <path fill="#FFF" d="M93.054 55.763L61.886 81.707v102.506h63.636V81.707z" />
          <g transform="translate(78.696 146.267)">
            <use fill="#FCCD00" xlinkHref="#pic-group_bookings_svg__p" />
            <use
              fill="#000"
              filter="url(#pic-group_bookings_svg__q)"
              xlinkHref="#pic-group_bookings_svg__p"
            />
            <ellipse fill="#4C4C4C" cx={22.954} cy={21.448} rx={2.049} ry={2.062} />
          </g>
          <path
            d="M95.818 55.527l30 24.322V91.12L95.801 66.96l-33.62 26.594V82.134l33.636-26.607z"
            fillOpacity={0.128}
            fill="#2B948A"
            fillRule="nonzero"
          />
          <path
            d="M95.89 52.227l37.23 29.906.001 11.191-37.247-29.703-36.385 28.515V80.754l36.4-28.527z"
            fill="#63656A"
            fillRule="nonzero"
          />
          <path
            d="M93.04 98.42v6.258H81.566v-6.257H93.04zm14.076 0v6.258H96.321V98.42h10.795zM93.04 88.524v6.599H81.565v-6.6H93.04zm14.075 0v6.599H96.32v-6.6h10.795zm-14.075 37.945v6.257H81.565v-6.257H93.04zm14.075 0v6.257H96.321v-6.257h10.795zM93.04 116.57v6.599H81.565v-6.6H93.04zm14.075 0v6.599H96.32v-6.6h10.795z"
            fill="#FCCD00"
          />
          <path
            d="M130.854 121.755l28.283 14.923v4.425h-3.03v13.043h3.03v7.305h-3.03v12.041h3.03v10.72h-28.283v-62.457zm22.39 38.888h-15.32v12.963h15.32v-12.963zm0-19.602h-15.32v13.056h15.32v-13.056z"
            fill="#CCC8B4"
          />
          <path fill="#63656A" d="M130.854 115.863v7.305l27.873 13.713v-6.058z" />
        </g>
        <g>
          <path
            d="M182.177 136.366c-1.745.243-2.953 1.893-2.7 3.685.251 1.792 1.867 3.047 3.613 2.8 1.744-.244 2.957-1.896 2.705-3.688-.252-1.79-1.87-3.043-3.618-2.797zm3.206 19.077l-17.6-13.622 13.128-18.195 52.654-7.4a4 4 0 014.518 3.404l3.358 23.898a4 4 0 01-3.404 4.518l-52.654 7.397z"
            fill="#F9A600"
          />
          <g fill="#FFF" fillRule="nonzero">
            <path d="M204.084 136.088a7.61 7.61 0 018.596 6.478l-15.073 2.118a7.61 7.61 0 016.477-8.596zm-1.192-8.478a3.805 3.805 0 111.06 7.536 3.805 3.805 0 01-1.06-7.536zM222.925 133.44a7.61 7.61 0 018.596 6.478l-15.073 2.118a7.61 7.61 0 016.477-8.596zm-1.191-8.478a3.805 3.805 0 111.059 7.536 3.805 3.805 0 01-1.06-7.536z" />
            <path
              d="M213.797 136.848a8.333 8.333 0 016.086 1.52 8.341 8.341 0 013.412 6.084h0l-16.474 2.588a8.344 8.344 0 011.463-6.945 8.334 8.334 0 015.513-3.247zm-1.191-8.479a4.541 4.541 0 013.375.873 4.541 4.541 0 011.77 3.004 4.541 4.541 0 01-.873 3.376 4.541 4.541 0 01-3.004 1.769 4.541 4.541 0 01-3.376-.873 4.541 4.541 0 01-1.77-3.004 4.541 4.541 0 01.874-3.375 4.541 4.541 0 013.004-1.77h0z"
              stroke="#F9A600"
              strokeWidth={1.5}
            />
          </g>
        </g>
        <path
          d="M171.805 135.353c-4.74.232-9.079 1.544-12.603 3.243m-6.09 3.927c-1.603 1.406-2.601 2.758-2.826 3.777-1.74 7.87 20.9 4.56 29.365-4.487.851-.91 1.138-2.778 0-3.5"
          stroke="#63656A"
          strokeLinecap="round"
        />
        <g>
          <path
            d="M80.395 34.223a2.147 2.147 0 001.95 2.325l1.425.125-.436 4.987 5.425-4.55 16.39 1.433a2.146 2.146 0 002.325-1.95l1.558-17.816a2.146 2.146 0 00-1.95-2.325l-22.804-1.995a2.146 2.146 0 00-2.325 1.95l-1.558 17.816z"
            fill="#98A7D3"
          />
          <path
            d="M90.497 24.958a1.086 1.086 0 00-1.531-.131l-.442.37a1.09 1.09 0 00-.137 1.531l3.473 4.138c.192.23.46.36.737.383.277.021.566-.06.797-.254l8.345-7.002a1.09 1.09 0 00.137-1.536l-.37-.442a1.094 1.094 0 00-1.537-.131l-7.073 5.934-2.4-2.86z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
});
SvgPicGroupbookings.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
};
SvgPicGroupbookings.defaultProps = {
  className: undefined,
  color: undefined,
  fontSize: 16,
};
export default SvgPicGroupbookings;
