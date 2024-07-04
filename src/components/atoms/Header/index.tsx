import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import styles from './index.module.css';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  iconSrc: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, iconSrc }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <Image src={iconSrc} alt={t('Header.iconAlt')} width={24} height={24} />
      <span className={styles.title}>{t(title)}</span>
      {subtitle && <span className={styles.subtitle}>{t(subtitle)}</span>}
    </div>
  );
};

export default Header;