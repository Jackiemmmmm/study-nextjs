// import PropTypes from 'prop-types';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function Test1() {
  const { t } = useTranslation('test-1');
  return (
    <div>
      Test1
      <h2>{t('translations_test')}</h2>
      <Link href="/translation/test-2">Go to Test - 2 </Link>
    </div>
  );
}

Test1.propTypes = {};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['test-1'])),
      // Will be passed to the page component as props
    },
  };
}

export default Test1;
