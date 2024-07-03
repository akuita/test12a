import React from 'react';
import Header from '@components/organisms/Header/Header';
import Footer from '@components/organisms/Footer/Footer';
import UserInfo from '@components/molecules/UserInfo/UserInfo';
import { useTranslation } from 'next-i18next';
import styles from './index.module.css';

const AttendanceSystem = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.attendanceSystem}>
      <Header />
      <main className={styles.mainContent}>
        <UserInfo
          name={t('AttendanceSystem.JackDaniel')}
          role={t('AttendanceSystem.Developer')}
          avatarSrc="https://studio-next.jitera.app/no.png"
        />
        <div className={styles.dateInfo}>
          <span>{t('AttendanceSystem.currentDate', { date: 'Wednesday, 27 September, 2023' })}</span>
        </div>
        <div className={styles.currentTime}>
          <span>08:30:20</span>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.checkInButton}>{t('AttendanceSystem.checkIn')}</button>
          <button className={styles.checkedOutButton}>{t('AttendanceSystem.checkedOut')}</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AttendanceSystem;