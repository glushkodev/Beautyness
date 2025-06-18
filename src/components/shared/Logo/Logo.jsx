import styles from './Logo.module.css';
import LogoIcon from '../../../assets/logo.svg?react';

const Logo = ({ className = '', textClassName = '', variant = '' }) => {
  const isHeader = variant === 'header'
  const isFooter = variant === 'footer'
  const isMenu = variant === 'menu'

  const iconSize = isHeader ? 33 : isFooter ? 65 : isMenu ? 33 : 40; 
  const iconColor = isHeader ? '#7A9CA5' : isFooter ? '#5C8692' : isMenu ? '#fff' : '#000'

  const fontSize = isHeader ? '28px' : isFooter ? '40px' : isMenu ? 20 : '24px';
  const color = isHeader ? '#141414' : isFooter ? '#ffffff' : isMenu ? '#fff' : '#000000'

  const textStyle = {
    fontSize,
    color
  };

  return (
    <div className={`${styles.logo} ${className}`}>
      <LogoIcon  
        width={iconSize}
        height={iconSize}
        style={{ stroke: iconColor }}
      />
      <span className={`${styles.text} ${textClassName}`} style={textStyle}>
        Beautyness
      </span>
    </div>
  );
};

export default Logo