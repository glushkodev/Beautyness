import styles from './Logo.module.css';
// import { ReactComponent as LogoIcon } from '../../../../../assets/logo.svg'
import LogoIcon from './LogoIcon'

const Logo = () => (
  <div className={styles.logo}>
    <LogoIcon />
    <span className={styles.text}>Beautyness</span>
  </div>
);

export default Logo