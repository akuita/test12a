import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/Avatar/Avatar'; // No changes needed
import { useTranslation } from 'next-i18next';

const UserInfo = ({ name, role, avatarSrc }) => {
  const { t } = useTranslation();

  return (
    <div className="user-info" style={{ backgroundColor: 'rgba(231, 231, 231, 1)', width: '100%', padding: '12px 0', boxSizing: 'border-box', textAlign: 'center' }}>
      <Avatar src={avatarSrc} alt={t('UserInfo.avatarAlt')} />
      <span style={{ color: 'rgba(168, 168, 168, 1)' }}>{t('UserInfo.name', { name })} - {t('UserInfo.role', { role })}</span>
    </div>
  );
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
};

export default UserInfo;