import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from './index.module.css';

export interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;