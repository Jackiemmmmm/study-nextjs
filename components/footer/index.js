import { makeStyles } from '@material-ui/styles';
import Image from 'next/image';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: 100,
    borderTop: '1px solid #eaeaea',
    ...theme.flex.center,
    '& a': {
      ...theme.flex.center,
      flexGrow: 1,
    },
  },
  logo: {
    height: '1em',
    marginLeft: '0.5rem',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={classes.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
