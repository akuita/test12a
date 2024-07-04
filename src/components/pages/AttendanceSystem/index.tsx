import React from 'react';
import { useTranslation } from 'next-i18next';
import { Card } from '@components/atoms/Card';
import { Label } from '@components/atoms/Label';
import { Title } from '@components/atoms/Title';
import { TimeDisplay } from '@components/atoms/TimeDisplay';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

const AttendanceSystemPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <Card className={styles.card}>
        <Label className={styles.label}>{t('AttendanceSystem.employee_info', { name: 'Jack Daniel', role: 'Developer' })}</Label>
        <div className={styles.dateContainer}>
          <img src="https://studio-next.jitera.app/no.png" alt={t('AttendanceSystem.calendar')} className={styles.calendarIcon} />
          <Label>{t('AttendanceSystem.date', { date: 'Wednesday, 27 September, 2023' })}</Label>
        </div>
        <TimeDisplay className={styles.timeDisplay} time={t('AttendanceSystem.time', { time: '08:30:20' })} />
        <div className={styles.buttonContainer}>
          <Button className={`${styles.button} ${styles.checkInButton}`}>{t('AttendanceSystem.check_in')}</Button>
          <Button className={`${styles.button} ${styles.checkedOutButton}`}>{t('AttendanceSystem.checked_out')}</Button>
        </div>
      </Card>
    </div>
  );
};

export default AttendanceSystemPage;