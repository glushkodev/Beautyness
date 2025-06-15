import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
	<nav className={styles.nav}>
		<ul className={styles.list}>
			<li className={styles.item}><Link className={styles.link} to={'/'}>Главная</Link></li>
			<li className={styles.item}>Страницы
				<ul className={styles.sublist}>
					<li className={styles.subitem}><Link className={styles.sublink} to={'/blog'}>О нас</Link></li>
					<li className={styles.subitem}><Link className={styles.sublink} to={'/team'}>Наша команда</Link></li>
					<li className={styles.subitem}><Link className={styles.sublink} to={'/locations'}>Где мы находимся</Link></li>
				</ul>
			</li>
			<li className={styles.item}><Link className={styles.link} to={'/services'}>Услуги</Link></li>
			<li className={styles.item}><Link className={styles.link} to={'/contact'}>Контакты</Link></li>			
		</ul>
	</nav>
);

export default Nav