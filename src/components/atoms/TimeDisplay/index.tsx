import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './index.module.css';

export interface TimeDisplayProps {
  time: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time }) => {
  return <span className={styles.time}>{time}</span>;
};

export default TimeDisplay;