import { makeStyles } from '@material-ui/styles';
// import PropTypes from 'prop-types';
import getConfig from 'next/config';
import React from 'react';
import DynamicImage from '~components/image';
import Typography from '~components/typography';
import MainDescription from './main-description';

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles(() => ({
  main: {
    marginBottom: 185,
    marginTop: 48,
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      '&#education-agents': {
        marginTop: 136,
        marginLeft: '8.5%',
        width: '91.5%', // 343 / 375
        height: 906,
        backgroundColor: '#f8f8f6',
        paddingTop: 218,
        '& $educationAgentsLastImg': {
          position: 'absolute',
          bottom: -128,
          left: '-4.27%', // 16 / 375
          width: 239,
          height: 239,
        },
      },
      '& $universitiesImgs': {
        position: 'relative',
        '& > *': {
          width: 240,
          height: 188,
          position: 'absolute',
          left: 0,
          top: 0,
          '& img': { objectFit: 'cover' },
          '&:last-child': { right: 0, left: 'auto', top: 48 },
        },
      },
      '& $groupBookingsImg': {
        position: 'absolute',
        top: -107,
        left: 0,
        width: 288,
        height: 178,
        '& img': { objectFit: 'cover' },
      },
    },
  },
  universitiesImgs: {},
  universitiesWrapper: {
    marginTop: 118,
    paddingTop: 156,
    width: 344,
    height: 671,
    backgroundColor: '#f8f8f6',
  },
  groupBookingsImg: {},
  educationAgentsImgs: {
    '& > *': {
      '& img': { objectFit: 'cover' },
      '&:first-child': {
        width: 303,
        height: 187,
        top: -64,
        right: 0,
        position: 'absolute',
      },
      '&:last-child': {
        width: 128,
        height: 128,
        position: 'absolute',
        right: 0,
        top: 66,
      },
    },
  },
  educationAgentsLastImg: {},
}));

function MobileMain() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div id="universities">
        <div className={classes.universitiesImgs}>
          <DynamicImage
            src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/Panmure Court-Edinburgh Showroom Studio 2.jpg`}
            placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/Panmure Court-Edinburgh Showroom Studio 2-xs.jpg`}
          />
          <DynamicImage
            src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_756559234.jpg`}
            placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_756559234_xs.jpg`}
          />
        </div>
        <div className={classes.universitiesWrapper}>
          <MainDescription
            title={'Universities'}
            number={'01'}
            description={
              <Typography component="p">
                List us on your website in the student accommodation section. A brilliant resource
                for students when university housing is oversubscribed, plus an opportunity for us
                to provide details of any agreed promotions for your students.
              </Typography>
            }
            style={{ marginLeft: 72 }}
          />
        </div>
      </div>
      <div id="group-bookings">
        <DynamicImage
          className={classes.groupBookingsImg}
          src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_682509613.jpg`}
          placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_682509613_xs.jpg`}
        />
        <MainDescription
          title={'Group Bookings'}
          number={'02'}
          description={
            <Typography component="p">
              Looking for accommodation for your group? We have nomination agreements with some of
              the world's largest student accommodation partners, from a small group of rooms to
              larger room block bookings we can help you.
            </Typography>
          }
          style={{ marginTop: 128, marginLeft: 72 }}
        />
      </div>
      <div id="education-agents">
        <div className={classes.educationAgentsImgs}>
          <DynamicImage
            src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_791764504.jpg`}
            placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_791764504_xs.jpg`}
          />
          <DynamicImage
            src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg`}
            placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/arnel-hasanovic-MNd-Rka1o0Q-unsplash-xs.jpg`}
          />
        </div>
        <MainDescription
          title={'Education'}
          number={'03'}
          description={
            <>
              <Typography component="p" style={{ marginBottom: 28 }}>
                Have a regular flow of students who need accommodation and want to have a
                partnership with a global leader of student accommodation? Get in touch to discuss
                conditions that will work for both of us.
              </Typography>
              <Typography component="p" style={{ marginTop: 0 }}>
                Not sure what you need? No problem, we are available on an ad-hoc basis. Need some
                student accommodation last minute? Get in touch. From one off requests to regular
                supply agreements, we can help.
              </Typography>
            </>
          }
          style={{ marginLeft: 40, width: 248 }}
        />
        <DynamicImage
          className={classes.educationAgentsLastImg}
          src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg`}
          placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/arnel-hasanovic-MNd-Rka1o0Q-unsplash-xs.jpg`}
        />
      </div>
    </div>
  );
}

MobileMain.propTypes = {};

export default MobileMain;
