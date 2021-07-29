import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Line from '~components/line';
import Typography from '~components/typography';
import { PicEducationAgents, PicGroupBookings, PicUniversities } from '~svg-components';
import DesktopMain from './desktop-main';
import MobileMain from './mobile-main';

const useStyles = makeStyles(() => ({
  root: {
    margin: '154.5px 0 0', // 156 / 1440
    paddingTop: 103.5,
    borderTop: '1px solid #e7e7e7',
    '& p': { marginTop: 24, marginBottom: 72 },
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    '& div': {
      width: 352,
      height: 352,
      paddingTop: 26,
      paddingBottom: 32,
      borderRadius: 2,
      boxShadow: '0 2px 8px 0 rgba(76, 76, 76, 0.16)',
      backgroundColor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '& svg': {
        width: 256,
        height: 208,
      },
      '& h5': {
        margin: '16px 0',
        fontSize: 18,
        color: '#4c4c4c',
        lineHeight: '28px',
        fontWeight: 600,
      },
      '& a': { color: '#38b2a6', lineHeight: '28px' },
    },
  },

  '@media (min-width: 769px)': {
    root: {
      '& > *': {
        margin: '0 auto',
        maxWidth: 1128,
      },
    },
  },
  '@media (max-width: 768px)': {
    root: {
      margin: '254px 8.53% 0',
      paddingTop: 64, // 32 / 375
      '& p': { marginTop: 16, marginBottom: 40 },
    },
    list: {
      flexDirection: 'column',
      justifyContent: 'center',
      '& div': {
        width: '100%',
        height: 311,
        marginBottom: 32,
        paddingBottom: 20,
        paddingTop: 24,
        '& h5': { marginTop: 8 },
        '& svg': {
          width: 256,
          height: 187,
        },
      },
    },
  },
}));

function WorkWithUs({ isMobile }) {
  const classes = useStyles();
  const list = [
    { svg: <PicUniversities />, title: 'Universities', href: '#universities' },
    { svg: <PicGroupBookings />, title: 'Group Bookings', href: '#group-bookings' },
    { svg: <PicEducationAgents />, title: 'Education Agents', href: '#education-agents' },
  ];
  return (
    <>
      <div className={classes.root}>
        <div>
          <Line />
        </div>
        <Typography variant="h4" component="h4">
          Ways to work with us
        </Typography>
        <Typography component="p">
          We already work with global universities and education partners, so we can easily adapt to
          how you need to work. We understand that you will have different needs specific to your
          student cohort. We pride ourselves in adapting to our partners requirements to make a
          smooth process for everyone involved.
        </Typography>
        <div className={classes.list}>
          {list.map(({ svg, title, href }) => (
            <div key={title}>
              {svg}
              <h5>{title}</h5>
              <Typography component="a" href={href}>
                Learn more
              </Typography>
            </div>
          ))}
        </div>
      </div>
      {isMobile ? <MobileMain /> : <DesktopMain />}
    </>
  );
}

WorkWithUs.propTypes = { isMobile: PropTypes.bool.isRequired };

export default WorkWithUs;
