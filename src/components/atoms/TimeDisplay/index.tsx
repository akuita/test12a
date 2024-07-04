import React from 'react';
import styles from './index.module.css';

interface TimeDisplayProps {
  time: string;
  className?: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, className }) => {
  return <div className={`${styles.timeDisplay} ${className}`}>{time}</div>;
};

export default TimeDisplay;