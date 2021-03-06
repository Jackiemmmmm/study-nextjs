// import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import Banner from '~components/banner';
import ContactUs from '~components/contact-us';
import DataDetails from '~components/data-details';
import Description from '~components/description';
import WorkWithUs from '~components/work-with-us';

// const useStyles = makeStyles((theme) => ({}));

function PartnerLandingPage({ isMobile }) {
  // const classes = useStyles();

  return (
    <div
      style={{
        minWidth: isMobile ? '100%' : 1200,
        maxWidth: isMobile ? '100%' : 1440,
        margin: '0 auto',
      }}
    >
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Banner isMobile={isMobile} />
      <Description isMobile={isMobile} />
      <DataDetails />
      <WorkWithUs isMobile={isMobile} />
      <ContactUs />
    </div>
  );
}

PartnerLandingPage.propTypes = { isMobile: PropTypes.bool.isRequired };

export default PartnerLandingPage;
