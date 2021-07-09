import { makeStyles } from '@material-ui/styles';
import getConfig from 'next/config';
// import PropTypes from 'prop-types';
import React from 'react';
import Typography from '~components/typography';

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles(() => ({
  root: {
    padding: '80px 0 64px',
    backgroundColor: '#38b2a6',
    backgroundImage: `url(
    ${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/pic-pattern.png
  )`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': { maxWidth: 984, textAlign: 'center' },
  },
  description: { padding: '24px 0 48px' },
  contactUs: {
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      width: 278,
      height: 64,
      backgroundColor: '#2b948a',
      borderRadius: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&:last-child': { marginLeft: 72 },
      '& span': {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: '16px',
      },
    },
  },
  '@media (max-width: 768px)': {
    root: { '& > *': { maxWidth: 323 } },
    description: { padding: '16px 0 40px', maxWidth: 293 },
    contactUs: {
      flexDirection: 'column',
      '& > *': { width: 323, '&:last-child': { marginLeft: 0, marginTop: 32 } },
    },
  },
}));

function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h4" color="#ffffff">
        Interested in working with us?
      </Typography>
      <Typography className={classes.description} component="div" color="#ffffff">
        We have access to a variety of rooms across different neighbourhoods in cities across the
        world, so whatever type of accommodation you are looking for - we will likely list it. At
        Student.com we vet and approve every housing provider we feature. It’s why we help students
        find the best room to suit their needs. It’s why we created Student.com. Choosing the right
        home provides a safe and inspiring foundation for students, helping them to grow and make
        the most of their university journey.
      </Typography>
      <div className={classes.contactUs}>
        <div>
          <Typography component="h6" color="white">
            partnerships@student.com
          </Typography>
          <span>Email use on</span>
        </div>
        <div>
          <Typography component="h6" color="white">
            +44 0203 8078 707
          </Typography>
          <span>Call us for free</span>
        </div>
      </div>
    </div>
  );
}

ContactUs.propTypes = {};

export default ContactUs;
