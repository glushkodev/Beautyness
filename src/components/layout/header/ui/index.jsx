import { useState } from 'react'
import styles from './index.module.css'
import Nav from './components/Nav/Nav'
import SocialIcons from './components/SocialIcons/SocialIcons'
import ReserveButton from './components/ReserveBtn/ReserveButton'
import Call from './components/Call/Call'
import Logo from '../../../shared/Logo/Logo'
import NavToogle from './components/NavToogle/NavToogle'
import NavMobile from './components/NavMobile/NavMobile'


const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu  = () => {
    setIsMenuOpen(false)
  }

	return (
		<header className={styles.header}>
			<div className={styles.start}>
				<Logo variant="header" />
				<Call />
			</div>
			<div className={styles.end}>
				<Nav />
				<NavToogle onClick={toggleMenu} isActive={isMenuOpen} />
        <NavMobile isOpen={isMenuOpen} onClose={closeMenu} />
				<SocialIcons />
				<ReserveButton />
			</div>
		</header>
	)
}

export default Header