import React from 'react';
import styles from './index.module.css';

interface TimeDisplayProps {
  time: string;
  className?: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, className }) => {
  return <span className={`${styles.timeDisplay} ${className}`}>{time}</span>;
};

export default TimeDisplay;