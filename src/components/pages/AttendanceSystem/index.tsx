import React, { useState } from 'react';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import UserInfo from '@components/molecules/UserInfo';
import { useTranslation } from 'next-i18next';
import styles from './index.module.css';
import Button from '@components/atoms/Button'; // Assuming Button is imported from atoms

const AttendanceSystem = () => {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState('08:30:20'); // Placeholder for current time state

  // Placeholder functions for check-in and check-out actions
  const handleCheckIn = () => {
    console.log('Check-in action triggered');
  };

  const handleCheckOut = () => {
    console.log('Check-out action triggered');
  };

  return (
    <div className={styles.attendanceSystem}>
      <Header />
      <main className={styles.mainContent}>
        <UserInfo
          name={t('AttendanceSystem.JackDaniel')}
          role={t('AttendanceSystem.Developer')}
          avatarSrc="/images/avatar.png" // Updated to use a relative path for the avatar image
        />
        <div className={styles.dateInfo}>
          <span>{t('AttendanceSystem.currentDate', { date: 'Wednesday, 27 September, 2023' })}</span>
        </div>
        <div className={styles.currentTime}>
          <span>{currentTime}</span> // Now using state for current time
        </div>
        <div className={styles.actionButtons}>
          <Button className={styles.checkInButton} onClick={handleCheckIn}>{t('AttendanceSystem.checkIn')}</Button>
          <Button className={styles.checkedOutButton} onClick={handleCheckOut}>{t('AttendanceSystem.checkedOut')}</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AttendanceSystem;