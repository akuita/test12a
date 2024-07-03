import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../atoms/Avatar/Avatar';
import { useTranslation } from 'next-i18next';

const UserInfo = ({ name, role, avatarSrc }) => {
  const { t } = useTranslation();

  return (
    <div className="user-info">
      <Avatar src={avatarSrc} alt={t('UserInfo.avatarAlt')} />
      <span>{t('UserInfo.name', { name })} - {t('UserInfo.role', { role })}</span>
    </div>
  );
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
};

export default UserInfo;