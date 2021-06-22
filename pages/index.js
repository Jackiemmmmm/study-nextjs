/* eslint-disable jsx-a11y/anchor-is-valid */
import { makeStyles } from '@material-ui/styles';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    maxHeight: '100vh',
    padding: '0 0.5rem',
    flexDirection: 'column',
    ...theme.flex.center,
  },
  main: {
    padding: '5rem 0',
    flex: 1,
    flexDirection: 'column',
    ...theme.flex.center,
  },
  title: {
    margin: 0,
    lineHeight: '1.15',
    fontSize: '4rem',
    textAlign: 'center',
    '& a': {
      color: '#0070f3',
      textDecoration: 'none',
      '&:hover, &:focus, &:active': { textDecoration: 'underline' },
    },
  },
  description: {
    textAlign: 'center',
    lineHeight: '1.5',
    fontSize: '1.5rem',
  },
  code: {
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  },
  grid: {
    ...theme.flex.center,
    flexWrap: 'wrap',
    maxWidth: '800px',
    marginTop: '3rem',
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    width: '45%',
    '&:hover, &:focus, &:active': {
      color: '#0070f3',
      borderColor: '#0070f3',
    },
    '& h2': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem',
    },
    '& p': {
      margin: 0,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
  },
  '@media (max-width: 600px)': {
    grid: {
      width: '100%',
      flexDirection: 'column',
    },
  },
}));

const routesDemo = [
  { name: 'Login', description: 'Demo for Login && Auth', href: '/login' },
  { name: 'Translation', description: 'Demo for Translation', href: '/login' },
  { name: 'Test', description: 'Demo for Test', href: '/login' },
];

function Home() {
  const styles = useStyles();
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{t('read_some_feature')}</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {routesDemo.map(({ name, description, href }) => (
            <Link href={href} key={name}>
              <a className={styles.card}>
                <h2>{name} &rarr;</h2>
                <p>{description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
