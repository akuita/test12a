import React from 'react';
import styles from './index.module.css';

interface AvatarProps {
  src: string;
  alt?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`${styles.avatar} ${className}`} />;
};

export default Avatar;