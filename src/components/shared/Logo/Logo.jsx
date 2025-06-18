import styles from './Logo.module.css';
import LogoIcon from '../../../assets/logo.svg?react';

const Logo = ({ className = '', textClassName = '', variant = '' }) => {
  const iconClass = variant === 'header'
    ? styles.headerIcon
    : variant === 'footer'
    ? styles.footerIcon
    : variant === 'menu'
    ? styles.menuIcon
    : '';

  const containerClass = `${styles.logo} ${styles[variant]} ${className}`;
  const textClass = `${styles.text} ${textClassName}`;

  return (
    <div className={containerClass}>
      <LogoIcon className={iconClass} />
      <span className={textClass}>Beautyness</span>
    </div>
  );
};

export default Logo