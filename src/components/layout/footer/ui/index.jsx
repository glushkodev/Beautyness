import styles from './index.module.css'
import Logo from '../../../shared/Logo/Logo'
import SocialIcons from './components/SocialIcons/SocialIcons'
import FooterNav from './components/FooterNav/FooterNav'
import Contacts from './components/Contacts/Contacts'
import WorkHours from './components/WorkHours/WorkHours'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.top}>
					<Logo variant="footer" />
					<SocialIcons />
				</div>
				<div className={styles.btm}>
					<FooterNav />
					<Contacts />
					<WorkHours />
				</div>
			</div>
		</footer>
	)
}

export default Footer