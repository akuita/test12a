import React from 'react';
import { useTranslation } from 'next-i18next';

import Header from '@components/atoms/Header';
import Card from '@components/atoms/Card';
import LabelWithIcon from '@components/atoms/LabelWithIcon';
import TimeDisplay from '@components/atoms/TimeDisplay';
import Button from '@components/atoms/Button';

import styles from './index.module.css';

const AttendanceSystemPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <Header
        title={t('AttendanceSystem.headerTitle')}
        iconSrc="/no.png"
      />
      <Card>
        <div className={styles.cardHeader}>
          <LabelWithIcon
            text={t('AttendanceSystem.userName')}
            iconSrc="/no.png"
          />
        </div>
        <div className={styles.cardBody}>
          <LabelWithIcon
            text={t('AttendanceSystem.currentDate')}
            iconSrc="/no.png"
          />
          <TimeDisplay time="08:30:20" />
          <div className={styles.buttonGroup}>
            <Button className={styles.checkInButton}>
              {t('AttendanceSystem.checkIn')}
            </Button>
            <Button className={styles.checkedOutButton}>
              {t('AttendanceSystem.checkedOut')}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AttendanceSystemPage;