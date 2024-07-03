import React, { useCallback } from 'react';
import Header from '@components/organisms/Header/Header';
import Button from '@components/atoms/Button/Button';
import Footer from '@components/organisms/Footer/Footer';
import UserInfo from '@components/molecules/UserInfo/UserInfo';
import { useTranslation } from 'next-i18next';
import styles from './index.module.css';
import { attendanceService } from '@services/attendanceService';

const AttendanceSystem = () => {
  const { t } = useTranslation();
  const handleCheckIn = useCallback(async () => {
    try {
      // Assuming the employee ID is available in the context or via a prop
      const employeeId = 123; // Replace with actual employee ID
      const response = await attendanceService.checkIn(employeeId);
      alert(`Checked in at: ${response.check_in_time}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }, []);

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
          <Button className={styles.checkInButton} onClick={handleCheckIn}>{t('AttendanceSystem.checkIn')}</Button>
          <button className={styles.checkedOutButton}>{t('AttendanceSystem.checkedOut')}</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AttendanceSystem;