import React from 'react';
import { useTranslation } from 'next-i18next';
import { Card } from '@components/atoms/Card';
import { Avatar } from '@components/atoms/Avatar';
import { Label } from '@components/atoms/Label';
import { TimeDisplay } from '@components/atoms/TimeDisplay';
import { Button } from '@components/atoms/Button';
import styles from './index.module.css';

export default function AttendanceSystemPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <Avatar src="https://studio-next.jitera.app/no.png" />
          <Label className={styles.userName}>
            {t('AttendanceSystem.jack_daniel_developer')}
          </Label>
        </div>
        <div className={styles.content}>
          <div className={styles.dateInfo}>
            <Avatar src="https://studio-next.jitera.app/no.png" />
            <Label>
              {t('AttendanceSystem.wednesday_september')}
            </Label>
          </div>
          <TimeDisplay time="08:30:20" className={styles.timeDisplay} />
          <div className={styles.buttons}>
            <Button className={styles.checkInButton}>
              {t('AttendanceSystem.check_in')}
            </Button>
            <Button className={styles.checkedOutButton}>
              {t('AttendanceSystem.checked_out')}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}