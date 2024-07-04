import React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '../../atoms/Avatar/Avatar';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="header__logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Avatar src="https://studio-next.jitera.app/no.png" alt={t('Header.logoAlt')} />
        <span>{t('AttendanceSystem.headerTitle')}</span>
      </div>
      <div className="header__navigation">
        {/* Navigation items can be mapped here if they are dynamic */}
        <div className="header__navigation-item" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Avatar src="https://studio-next.jitera.app/no.png" alt={t('Header.navItemAlt')} />
          <span style={{ color: 'rgba(61, 84, 249, 1)' }}>{t('Header.navItemTimeTracking')}</span>
        </div>
        <div className="header__navigation-item" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Avatar src="https://studio-next.jitera.app/no.png" alt={t('Header.navItemAlt')} />
          <span>{t('Header.navItemTimeSheet')}</span>
        </div>
        <Avatar src="https://studio-next.jitera.app/no.png" alt={t('Header.navItemAlt')} />
      </div>
    </div>
  );
};

export default Header;