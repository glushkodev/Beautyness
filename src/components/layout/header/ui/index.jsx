import styles from './index.module.css'
import Nav from './components/Nav/Nav'
import SocialIcons from './components/SocialIcons/SocialIcons'
import ReserveButton from './components/ReserveBtn/ReserveButton'
import Call from './components/Call/Call'
import Logo from '../../../shared/Logo/Logo'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.start}>
				<Logo variant="header" />
				<Call />
			</div>
			<div className={styles.end}>
				<Nav />
				<SocialIcons />
				<ReserveButton />
			</div>
		</header>
	)
}

export default Header