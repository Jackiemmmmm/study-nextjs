// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import getConfig from 'next/config';
import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import DynamicImage from '~components/image';
import Typography from '~components/typography';
import {
  IconBeds,
  IconCountries,
  IconLanguages,
  IconRates,
  IconSupport,
  IconUniversities,
} from '~svg-components';

const { publicRuntimeConfig } = getConfig();

const ScrollParallax = ScrollAnim.Parallax;

const useStyles = makeStyles(() => ({
  dataDetails: {
    width: '86.94%', // 1252 / 1440
    height: 665,
    backgroundColor: '#fff8da',
    marginTop: 152,
    display: 'flex',
  },
  dataDetailsLeft: {
    width: '50.9%', // 637 / 1252
    paddingLeft: '13.5%', // 195 / 1440
    paddingRight: 97,
    paddingTop: 64,
    paddingBottom: 64,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& svg': { width: 72, height: 72, color: '#fcce01' },
    '& div': { width: '50%', textAlign: 'center' },
    '& h4': {
      margin: '8px 0 0',
    },
    '& p': { margin: 0 },
  },
  dataDetailsRight: {
    width: '49.1%',
    position: 'relative',
    '& $img1, & $img2, & $img3, & $img4': {
      position: 'absolute',
      '& img': { objectFit: 'cover' },
    },
  },
  imgRoot: { width: '100%', height: '100%' },
  img1: { width: 325, height: 240, right: 290, top: 163 },
  img2: { width: 323, height: 393, right: -32, top: -40 },
  img3: { width: 241, height: 197, right: 291, top: 518 },
  img4: { width: 220, height: 197, right: 71, top: 353 },
  '@media (max-width: 768px)': {
    dataDetails: {
      marginTop: 64,
      width: '100%',
      height: 961,
      flexDirection: 'column',
      marginBottom: 173,
    },
    dataDetailsLeft: {
      width: '100%',
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingBottom: 47,
      '& div': { marginBottom: 49 },
    },
    dataDetailsRight: {
      width: '100%',
      '& $img2': { display: 'none' },
    },
    img1: {
      width: 275,
      height: 240,
      right: 'auto',
      left: 0,
      top: 0,
      zIndex: 2,
    },
    img3: { width: 220, height: 197, right: 72, top: 216, zIndex: 3 },
    img4: { width: 155, height: 197, right: 0, top: 155, zIndex: 1 },
  },
}));

function DataDetails() {
  const classes = useStyles();
  const list = [
    { svg: <IconBeds />, text: '1.25M+', des: 'Student beds' },
    { svg: <IconUniversities />, text: '1,000+', des: 'Universities' },
    { svg: <IconLanguages />, text: '25', des: 'Languages' },
    { svg: <IconCountries />, text: '146', des: 'Countries' },
    { svg: <IconRates />, text: '4.7 star', des: 'Trustpilot rating' },
    { svg: <IconSupport />, text: '24/7', des: 'Free Expert Service' },
  ];
  return (
    <div className={classes.dataDetails}>
      <div className={classes.dataDetailsLeft}>
        {list.map(({ svg, text, des }) => (
          <div key={text}>
            {svg}
            <Typography component="h4" variant="h4">
              {text}
            </Typography>
            <Typography component="p">{des}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.dataDetailsRight}>
        <ScrollParallax
          animation={[{ opacity: 1, scaleX: 1, scaleY: 1, playScale: [0, 0.5] }]}
          style={{ opacity: 0, transform: 'scale(1.2)' }}
          className={classes.img1}
        >
          <DynamicImage
            src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_478513852.jpg`}
            placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_478513852_xs.jpg`}
            className={classes.imgRoot}
          />
        </ScrollParallax>
        <ScrollParallax
          animation={[{ opacity: 1, scaleX: 1, scaleY: 1, playScale: [0, 0.5] }]}
          style={{ opacity: 0, transform: 'scale(0.8)' }}
          className={classes.img2}
        >
          <DynamicImage
            src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/Castle Residential Properties-Emm Field Villas -Bradford Premium EnSuite.jpg`}
            placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/Castle Residential Properties-Emm Field Villas -Bradford Premium EnSuite-xs.jpg`}
            className={classes.imgRoot}
          />
        </ScrollParallax>
        <ScrollParallax
          animation={[{ opacity: 1, scaleX: 1, scaleY: 1, playScale: [0, 0.3] }]}
          style={{ opacity: 0, transform: 'scale(1.2)' }}
          className={classes.img3}
        >
          <DynamicImage
            src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_1139659520.jpg`}
            placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_1139659520_xs.jpg`}
            className={classes.imgRoot}
          />
        </ScrollParallax>
        <ScrollParallax
          animation={[{ opacity: 1, scaleX: 1, scaleY: 1, playScale: [0, 0.3] }]}
          style={{ opacity: 0, transform: 'scale(0.5)' }}
          className={classes.img4}
        >
          <DynamicImage
            src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/Greystar-Spley House-Huddersfield 4-6 Bed Classic EnSuite Aptmt (2 of 8) Copy.jpg`}
            placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/Greystar-Spley House-Huddersfield 4-6 Bed Classic EnSuite Aptmt (2 of 8)-xs.jpg`}
            className={classes.imgRoot}
          />
        </ScrollParallax>
      </div>
    </div>
  );
}

DataDetails.propTypes = {};

export default DataDetails;
