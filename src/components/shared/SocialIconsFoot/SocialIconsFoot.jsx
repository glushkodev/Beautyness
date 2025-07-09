import styles from './SocialIconsFoot.module.css'
import FbIcon from '../../../assets/fb_ico.svg?react'
import XIcon from '../../../assets/x_ico1.svg?react'
import InIcon from '../../../assets/in_ico.svg?react'
import InstIcon from '../../../assets/inst_ico.svg?react'

const SocialIconsFoot = ({ variant = '' }) => {
	const linkClass = `${styles.link} ${variant === 'blog' ? styles.blogLink : ''}`
		
	return (
		<div className={styles.icons}>
			<a className={linkClass} href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer">
				<FbIcon className={styles.facebook}/>
			</a>
			<a className={linkClass} href="https://x.com/" target='_blank' rel="noopener noreferrer">
				<XIcon className={styles.x}/>
			</a>
			<a className={linkClass} href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer">
				<InIcon className={styles.linkedin}/>
			</a>
			<a className={linkClass} href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">
				<InstIcon className={styles.instagram}/>
			</a>
		</div>
	)
}

export default SocialIconsFoot