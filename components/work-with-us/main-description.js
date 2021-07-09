import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import PartnerButton from '~components/partner-button';
import TitleWithNumber from './title-with-number';

const useStyles = makeStyles(() => ({
  mainContentText: { width: 341, '& p': { margin: '40px 0 64px', lineHeight: '28px' } },
  '@media (max-width: 768px)': {
    mainContentText: { width: 240, '& p': { margin: '12px 0 40px', lineHeight: '24px' } },
  },
}));

function MainDescription({ title, number, description, style }) {
  const classes = useStyles();
  return (
    <div className={classes.mainContentText} style={style}>
      <TitleWithNumber title={title} number={number} />
      {description}
      <PartnerButton />
    </div>
  );
}

MainDescription.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.any,
  style: PropTypes.object,
};

export default MainDescription;
