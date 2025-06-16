import { Link } from 'react-router-dom';
import styles from './FooterNav.module.css';

const FooterNav = () => (
	<div className={styles.nav}>
		<div className={styles.elem}>
			<h4 className={styles.title}>Меню</h4>
			<ul className={styles.list}>
				<li className={styles.item}><Link className={styles.link} to={'/'}>Главная</Link></li>
				<li className={styles.item}><Link className={styles.link} to={'/about'}>О нас</Link></li>
				<li className={styles.item}><Link className={styles.link} to={'/services'}>Услуги</Link></li>
				<li className={styles.item}><Link className={styles.link} to={'/contact'}>Контакты</Link></li>
			</ul>
		</div>
		<div className={styles.elem}>
			<h4 className={styles.title}>Исследуйте</h4>
			<ul className={styles.list}>
				<li className={styles.item}><Link className={styles.link} to={'/locations'}>Где мы находимся</Link></li>
				<li className={styles.item}><Link className={styles.link} to={'/blog'}>Блог</Link></li>
				<li className={styles.item}><Link className={styles.link} to={'/team'}>Наша команда</Link></li>
				<li className={styles.item}><Link className={styles.link} to={'/services'}>Записаться</Link></li>
			</ul>
		</div>
	</div>
);

export default FooterNav