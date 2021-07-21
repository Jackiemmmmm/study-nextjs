// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import getConfig from 'next/config';
import React, { useState } from 'react';
import DynamicImage from '~components/image';
import PartnerButton from '~components/partner-button';

const BANNER_TRANSITION = 0.8;
const BANNER_MAIN_TRANSITION = 0.5;

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles(() => ({
  banner: {
    width: '100%',
    minHeight: '80vh',
    position: 'relative',
    opacity: 0,
    transition: `${BANNER_TRANSITION}s`,
    marginBottom: 71,
  },
  bannerBg: { width: '100%' },
  bannerMain: {
    position: 'absolute !important',
    top: '13.5%', // 96px / 709px
    maxWidth: '89.2%', // 1284px / 1440px
    opacity: 0,
    transform: 'scale(1.3)',
    transition: `${BANNER_MAIN_TRANSITION}s 0.3s ease`,
  },
  bannerMainText: {
    position: 'absolute',
    top: '27%', // 192px / 709px
    width: '52.5%', // 756px / 1440px
    left: '10.8%', // 156px / 1440
    opacity: 0,
    transform: 'translateY(50px)',
    transition: `${BANNER_MAIN_TRANSITION}s ${BANNER_TRANSITION + 0.1}s ease`,
    '& h4': {
      fontSize: 20,
      color: '#fcce01',
      textShadow: '0 0 16px rgba(0, 0, 0, 0.2)',
      fontWeight: 'bold',
      letterSpacing: '8px',
      margin: 0,
      fontFamily: 'Avenir Next',
    },
    '& h2': {
      lineHeight: 1.29,
      margin: '3.18% 0 6.35%', // 24px 48px
      textShadow: '0 0 16px rgba(0, 0, 0, 0.2)',
      fontSize: 56,
      fontWeight: 600,
      fontFamily: 'Avenir Next',
      color: '#ffffff',
    },
  },
  whiteBg: {
    width: '62.3%', // 800
    height: '15.6%', // 105
    position: 'absolute',
    bottom: '-1.79%',
    backgroundColor: '#ffffff',
  },
  loadedBanner: {
    opacity: 1,
    '& $bannerMain': { transform: 'scale(1)', opacity: 1 },
    '& $bannerMainText': { opacity: 1, transform: 'translateY(0px)' },
  },
  '@media (max-width: 768px)': {
    banner: { marginBottom: 420, minHeight: '30vh' },
    bannerBg: { height: 256, '& img': { objectFit: 'cover' } },
    bannerMain: {
      height: 240,
      top: '25%', // 64px / 256px
      '& img': {
        objectPosition: '-124px 0',
        objectFit: 'cover',
      },
    },
    bannerMainText: {
      width: '79%', // 303px / 375px
      top: '137.5%',
      '& h4': {
        lineHeight: '40px',
        fontSize: 16,
      },
      '& h2': {
        margin: '4.06% 0 8.12%', // 12px 24px
        fontSize: 28,
        color: '#4c4c4c',
      },
    },
    whiteBg: { display: 'none' },
  },
}));

function Banner() {
  const classes = useStyles();
  const [loadBanner, setLoadBanner] = useState({ bg: false, main: false });
  const showBanner = !Object.values(loadBanner).includes(false);
  const loadedHandleImage = (key) => () => {
    if (loadBanner[key]) return;
    setLoadBanner((prev) => ({ ...prev, [key]: true }));
  };
  return (
    <div className={classNames(classes.banner, { [classes.loadedBanner]: showBanner })}>
      <DynamicImage
        src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_522883132.jpg`}
        placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_522883132_xs.jpg`}
        className={classes.bannerBg}
        loadedCallback={loadedHandleImage('bg')}
      />
      <DynamicImage
        src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_583872673.jpg`}
        placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_583872673_xs.jpg`}
        className={classes.bannerMain}
        loadedCallback={loadedHandleImage('main')}
      >
        <div className={classes.whiteBg} />
      </DynamicImage>
      <div className={classes.bannerMainText}>
        <h4>JOIN US TO</h4>
        <h2>Help students find their perfect home away from home anywhere in the world</h2>
        <PartnerButton theme="dark" />
      </div>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
