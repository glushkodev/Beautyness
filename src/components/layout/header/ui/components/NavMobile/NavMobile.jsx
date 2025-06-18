import { Link } from 'react-router-dom';
import styles from './NavMobile.module.css';
import Logo from '../../../../../shared/Logo/Logo'
import { useEffect, useState } from 'react';

const NavMobile = ({ isOpen, onClose }) => {
	 const [isSubmenuOpen, setIsSubmenuOpen] = useState (false);

	 useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

	const subMenu = () => {
    setIsSubmenuOpen(prev => !prev);
  };

	return (
		<div className={`${styles.navmobile} ${isOpen ? styles.open : ''}`}>
      <div className={styles.overlay} onClick={onClose}></div>
			<div className={styles.menu}>
				 <button className={styles.close} onClick={onClose}></button>
				<Logo variant="menu" />
							
				<ul className={styles.list}>
					<li className={styles.item}><Link className={styles.link} to={'/'} onClick={onClose}>Главная</Link></li>
					<li className={`${styles.item} ${isSubmenuOpen ? styles.active : ''}`} onClick={subMenu}>Страницы
						<ul className={`${styles.sublist} ${isSubmenuOpen ? styles.sublistOpen : ''}`}>
							<li className={styles.subitem}><Link className={styles.sublink} to={'/blog'} onClick={onClose}>Блог</Link></li>
							<li className={styles.subitem}><Link className={styles.sublink} to={'/team'} onClick={onClose}>Наша команда</Link></li>
							<li className={styles.subitem}><Link className={styles.sublink} to={'/locations'} onClick={onClose}>Где мы находимся</Link></li>
						</ul>
					</li>
					<li className={styles.item}><Link className={styles.link} to={'/about'} onClick={onClose}>О нас</Link></li>
					<li className={styles.item}><Link className={styles.link} to={'/services'} onClick={onClose}>Услуги</Link></li>
					<li className={styles.item}><Link className={styles.link} to={'/contact'} onClick={onClose}>Контакты</Link></li>			
				</ul>
				
				<Link to="/services" className={styles.btn} onClick={onClose}>Забронировать</Link>
			</div>
		</div>
	)
}

export default NavMobile