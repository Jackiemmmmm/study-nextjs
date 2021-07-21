// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import getConfig from 'next/config';
import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import DynamicImage from '~components/image';
import Line from '~components/line';
import Typography from '~components/typography';
import useScroll from '~hooks/use-scroll';

const ROOT_TRANSITION = 0.5;
const MAIN_TRANSITION = 0.3;

const { publicRuntimeConfig } = getConfig();

const ScrollParallax = ScrollAnim.Parallax;

const getPlayScaleEnd = (idx) => {
  switch (idx) {
    case 0:
      return 0.8;
    case 1:
      return 0.4;
    case 2:
      return 0.6;
    default:
      return 1;
  }
};

const useStyles = makeStyles(() => ({
  root: {
    padding: '48px 10.8% 0',
    position: 'relative',
    '& h4': {
      opacity: 0,
      transition: `${ROOT_TRANSITION}s`,
      transform: 'translateY(50px)',
      margin: '0 0 32px',
    },
  },
  mainDescription: {
    display: 'flex',
    flexWrap: 'wrap',
    opacity: 0,
    transition: `${ROOT_TRANSITION}s`,
    justifyContent: 'space-between',
  },
  mainItem: {
    width: 352,
    position: 'relative',
    paddingBottom: 64,
    '& $img': { width: 352, height: 520, '& img': { objectFit: 'cover' } },
    '&$isOdd': { marginTop: 120 },
    '&$isLast': { marginTop: 64 },
  },
  mainItemText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#ffffff',
    width: 316,
    padding: 40,
    '& p': {
      width: 48,
      height: 30,
      margin: 0,
      color: '#ffffff',
      lineHeight: '30px',
      textAlign: 'center',
      fontFamily: 'Avenir Next',
      fontWeight: 'bold',
      backgroundColor: '#fcce01',
      position: 'absolute',
      borderRadius: 1,
      top: -16,
      '&::after': {
        position: 'absolute',
        content: '""',
        width: 0,
        height: 0,
        border: '10px solid transparent',
        borderTopColor: '#fcce01',
        bottom: -20,
        left: 14,
      },
    },
    '& h5': {
      margin: '0 0 16px',
      fontSize: 20,
      lineHeight: '28px',
      color: '#4c4c4c',
      fontWeight: 600,
      fontFamily: 'Avenir Next',
    },
  },
  isOdd: {},
  img: {},
  isLast: {},
  greyBg: {
    width: '78.2%', // 1126 / 1440
    height: 1040,
    position: 'absolute',
    right: 0,
    top: 48 + 32 + 4,
    backgroundColor: '#f8f8f6',
    zIndex: -1,
    transition: `${MAIN_TRANSITION}s`,
    opacity: 0,
    transform: 'translateY(100px)',
  },
  loaded: {
    '& h4': { opacity: 1, transform: 'translateY(0px)' },
    '& $mainDescription': { opacity: 1 },
    '& $greyBg': { opacity: 1, transform: 'translateY(0)' },
  },
  '@media (max-width: 768px)': {
    root: { padding: '56px 0 0', '& h4': { marginLeft: 38 } },
    ml38: { marginLeft: 38 },
    greyBg: {
      width: '89.3%', // 335 / 375
      height: 1296,
      top: 0,
      left: 0,
    },
    mainDescription: { justifyContent: 'flex-end' },
    mainItem: {
      width: 336,
      marginBottom: 40,
      paddingBottom: 160,
      position: 'relative',
      '& $img': { width: 336, height: 208 },
      '&$isOdd, &$isLast': { marginTop: 0 },
      '&:not($isOdd)': {
        left: 'calc(279px - 100%)', // 336 - 39
      },
    },
    mainItemText: { left: 'auto', right: 0 },
  },
}));

function Description() {
  const { ref, isShow } = useScroll(true);
  const classes = useStyles();
  const list = [
    {
      title: 'Wellbeing is the top of our priorities',
      content:
        'We work with landlords who share the same values as us, which means students are taken care of.',
      src: 'shutterstock_6577611882.jpg',
      placeholder: 'shutterstock_6577611882_xs.jpg',
    },
    {
      title: '24/7 Support',
      content:
        'Our help is aways available via local phone numbers, WhatsApp and email. Our multi-lingual team provides expert advice and free service around the clock.',
      src: 'shutterstock_1567504015.jpg',
      placeholder: 'shutterstock_1567504015_xs.jpg',
    },
    {
      title: 'Price match guarantee',
      content:
        'Price match guarantee for students, so they always get the best price. Plus regular offers - free linen packs etc - and the free service from our expert bookings team.',
      src: 'shutterstock_1465282577.jpg',
      placeholder: 'shutterstock_1465282577_xs.jpg',
    },
  ];
  return (
    <div className={classNames(classes.root, { [classes.loaded]: isShow })} ref={ref}>
      <Line className={classes.ml38} />
      <Typography component="h4" variant="h4">
        Why work with us?
      </Typography>
      <div className={classes.mainDescription}>
        {list.map(({ title, content, src, placeholder }, idx) => {
          const isOdd = idx !== 1;
          return (
            <ScrollParallax
              animation={[{ opacity: 1, translateY: 0, playScale: [0, getPlayScaleEnd(idx)] }]}
              style={{ opacity: 0, transform: 'translateY(50px)' }}
              key={title}
            >
              <div
                className={classNames(classes.mainItem, {
                  [classes.isOdd]: isOdd,
                  [classes.isLast]: idx === list.length - 1,
                })}
              >
                <DynamicImage
                  className={classes.img}
                  src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/${src}`}
                  placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/${placeholder}`}
                />
                <div className={classes.mainItemText}>
                  <p>{`0${idx + 1}`}</p>
                  <h5>{title}</h5>
                  <Typography component="div">{content}</Typography>
                </div>
              </div>
            </ScrollParallax>
          );
        })}
      </div>
      <div className={classes.greyBg} />
    </div>
  );
}

Description.propTypes = {};

export default Description;
