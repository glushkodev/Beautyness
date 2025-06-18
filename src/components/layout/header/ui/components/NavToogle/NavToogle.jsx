import styles from './NavToogle.module.css';

const NavToogle = ({ onClick, isActive }) => {
	return (
		<button  
			className={`${styles.navtoogle} ${isActive ? styles.active : ''}`} 
      onClick={onClick}
      aria-label="Toggle menu"
    >
			<svg width="32" height="5" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24 1H0" stroke="#2b2b2b" strokeWidth="1.7" strokeLinejoin="round" />
			</svg>
			<svg width="32" height="5" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24 1H0" stroke="#2b2b2b" strokeWidth="1.7" strokeLinejoin="round" />
			</svg>
			<svg width="32" height="5" viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24 1H0" stroke="#2b2b2b" strokeWidth="1.7" strokeLinejoin="round" />
			</svg>
		</button>
	)
}

export default NavToogle