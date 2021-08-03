// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import getConfig from 'next/config';
import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import DynamicImage from '~components/image';
import Typography from '~components/typography';
import { PicUniversity } from '~svg-components';
import MainDescription from './main-description';

const { publicRuntimeConfig } = getConfig();

const ScrollParallax = ScrollAnim.Parallax;

const useStyles = makeStyles(() => ({
  main: {
    width: '100%',
    backgroundColor: '#f8f8f6',
    marginTop: -120,
    marginBottom: 178,
    paddingTop: 276,
    display: 'flex',
    flexDirection: 'column',
    '& #universities, & #group-bookings, & #education-agents': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    '& #education-agents': {
      marginBottom: 154,
      '& $educationAgentsImg2': {
        width: 169,
        height: 345,
        position: 'absolute',
        top: 0,
        left: 0,
      },
      '& $educationAgentsImg3': {
        width: 312,
        height: 312,
        position: 'absolute',
        bottom: -228, // 560 - 512 - 312 + 36
        right: '26.7%', // 384 / 1440,
      },
    },
  },
  universitiesImg: { width: 750, height: 640, overflow: 'hidden' },
  groupBookingsImg: { width: 690, height: 440, overflow: 'hidden' },
  onlyImgContent: { display: 'flex', flexDirection: 'row' },
  onlyImgContentLeft: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    '& svg': {
      width: 420,
      height: 152,
      margin: '-48px 0 -2px 131.8px',
    },
  },
  emptyImg1: {
    width: '53.7%', // 610 / 1136
    height: 160,
    backgroundColor: '#ffffff',
  },
  emptyImg2: {
    width: '21.1%', // 304 /1440
    height: 144,
    backgroundColor: '#ffffff',
  },
  onlyEmpty1: {
    width: '42.4%', // 610 / 1440
    height: 160,
    backgroundColor: '#ffffff',
  },
  onlyEmpty2: {
    width: '5.56%', // 80 / 1440
    height: 123.8,
    backgroundColor: '#ffffff',
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: -780.4,
      left: 0,
      width: '100%',
      height: 780.4,
      backgroundColor: '#ffffff',
    },
  },
  onlyEmpty3: {
    width: 460, // 460 / 560,
    height: 50,
    backgroundColor: '#ffffff',
  },
  educationAgentsRight: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    marginTop: -19.6,
  },

  educationAgentsImg: { width: 560, height: 560, overflow: 'hidden' },
  educationAgentsImg2: {},
  educationAgentsImg3: {},
}));

function DesktopMain() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div id="universities">
        <MainDescription
          title={'Universities'}
          number={'01'}
          description={
            <Typography component="p">
              List us on your website in the student accommodation section. A brilliant resource for
              students when university housing is oversubscribed, plus an opportunity for us to
              provide details of any agreed promotions for your students.
            </Typography>
          }
          style={
            { marginLeft: '10.83%', marginTop: -28 } // marginLeft: 156 / 1440
          }
        />

        <div className={classes.universitiesImg}>
          <ScrollParallax
            animation={{ translateY: -156, playScale: [0.4, 1.2], ease: 'linear' }}
            style={{ transform: 'translateY(0)' }}
          >
            <DynamicImage
              src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_756559234.jpg`}
              placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_756559234_xs.jpg`}
            />
          </ScrollParallax>
        </div>
      </div>
      <div className={classes.onlyImgContent}>
        <div className={classes.onlyImgContentLeft}>
          <PicUniversity />
          <div className={classes.emptyImg1} />
        </div>
        <div className={classes.emptyImg2} />
      </div>
      <div id="group-bookings" style={{ marginBottom: -39 }}>
        <div className={classes.groupBookingsImg}>
          <ScrollParallax
            animation={{ translateY: -109, playScale: [0.2, 1.2], ease: 'linear' }}
            style={{ transform: 'translateY(0)' }}
          >
            <DynamicImage
              src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_682509613.jpg`}
              placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_682509613_xs.jpg`}
            />
          </ScrollParallax>
        </div>
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
          style={
            { marginRight: '16.32%', marginTop: 100 } // marginRight: 235 / 1440
          }
        />
      </div>
      <div className={classes.onlyEmpty1} />
      <div className={classes.onlyEmpty2} />
      <div id="education-agents" style={{ position: 'relative' }}>
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
          style={
            { margin: '79.4px 0 0 20.83%' } // marginLeft: 300 / 1440
          }
        />
        <div className={classes.educationAgentsRight}>
          <div className={classes.onlyEmpty3} />

          <div className={classes.educationAgentsImg}>
            <ScrollParallax
              animation={{ translateY: -162, playScale: [0.2, 1.2], ease: 'linear' }}
              style={{ transform: 'translateY(0)' }}
            >
              <DynamicImage
                src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_791764504.jpg`}
                placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/shutterstock_791764504_xs.jpg`}
              />
            </ScrollParallax>
          </div>
        </div>
        <DynamicImage
          className={classes.educationAgentsImg2}
          src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/Panmure Court-Edinburgh Showroom Studio 2.jpg`}
          placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/Panmure Court-Edinburgh Showroom Studio 2-xs.jpg`}
        />
        <DynamicImage
          className={classes.educationAgentsImg3}
          src={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg`}
          placeholder={`${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/arnel-hasanovic-MNd-Rka1o0Q-unsplash-xs.jpg`}
        />
      </div>
    </div>
  );
}

DesktopMain.propTypes = {};

export default DesktopMain;
