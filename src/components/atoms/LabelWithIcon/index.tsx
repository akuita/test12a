import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import styles from './index.module.css';

export interface LabelWithIconProps {
  text: string;
  iconSrc: string;
}

const LabelWithIcon: React.FC<LabelWithIconProps> = ({ text, iconSrc }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.labelWithIcon}>
      <Image src={iconSrc} alt={t('LabelWithIcon.iconAlt')} width={16} height={16} />
      <span className={styles.text}>{t(text)}</span>
    </div>
  );
};

export default LabelWithIcon;