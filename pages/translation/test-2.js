// import PropTypes from 'prop-types';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

function Test2() {
  const { t } = useTranslation('test-2');
  return (
    <div>
      Test2
      <h2>{t('translations_test')}</h2>
      <Link href="/translation/test-1">Go to Test - 1 </Link>
    </div>
  );
}

Test2.propTypes = {};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['test-2'])),
      // Will be passed to the page component as props
    },
  };
}

export default Test2;
