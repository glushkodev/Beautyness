import styles from './index.module.css'
import Logo from '../../../shared/Logo/Logo'
import SocialIcons from './components/SocialIcons/SocialIcons'

const Footer = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.top}>
					<Logo variant="footer" />
					<SocialIcons />
				</div>
				<div className={styles.btm}>
					
				</div>
			</div>
		</footer>
	)
}

export default Footer