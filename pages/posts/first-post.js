import { makeStyles } from '@material-ui/styles';
import getConfig from 'next/config';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '~components/layout';
import { BasicBed } from '~svg-components';

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: 'blue',
    },
    h4: {
      ...theme.typography.h4,
    },
    testPic: {
      width: 400,
      height: 400,
      backgroundImage: `url(
        ${publicRuntimeConfig.PUBLIC_FILE_PATH_PREFIX}/images/pic-phone-big-d@1x.png
      )`,
    },
  };
});

function FirstPost() {
  const classes = useStyles();
  const routes = ['login'];
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className={classes.root}>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      {routes.map((item) => (
        <h2 key={item}>
          <Link href={`/${item}`}>Login</Link>
        </h2>
      ))}

      <h4 className={classes.h4}>Test</h4>
      <BasicBed />
      <Image src="/images/pic-phone-big-d@1x.png" alt="pic-phone" width={676} height={462} />
      <div className={classes.testPic}>Test</div>
    </Layout>
  );
}

FirstPost.propTypes = {};

export default FirstPost;
