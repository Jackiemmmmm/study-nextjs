import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: 'blue',
    },
    h4: {
      ...theme.typography.h4,
    },
  };
});

function FirstPost() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.root}>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h4 className={classes.h4}>Test</h4>
    </>
  );
}

FirstPost.propTypes = {};

export default FirstPost;
