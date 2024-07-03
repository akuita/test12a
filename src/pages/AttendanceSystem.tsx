import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AttendanceSystem from '@components/pages/AttendanceSystem';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'AttendanceSystem'])),
  },
});

const AttendanceSystemPage = () => {
  return <AttendanceSystem />;
};

export default AttendanceSystemPage;