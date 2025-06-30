import styles from './index.module.css'
import Logo from '../../../shared/Logo/Logo'
import FooterNav from './components/FooterNav/FooterNav'
import Contacts from './components/Contacts/Contacts'
import WorkHours from './components/WorkHours/WorkHours'
import SocialIconsFoot from '../../../shared/SocialIconsFoot/SocialIconsFoot'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.top}>
					<Logo variant="footer" />
					<SocialIconsFoot />
				</div>
				<div className={styles.btm}>
					<FooterNav />
					<Contacts />
					<WorkHours />
				</div>
			</div>
			<div className={styles.copyright}>&copy; 2025 Beautyness. Все права защищены. <br />Разработчик Глушко Екатерина.</div>
		</footer>
	)
}

export default Footer