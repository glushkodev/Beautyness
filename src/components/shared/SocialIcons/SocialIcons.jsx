import styles from './SocialIcons.module.css'
import FbIcon from '../../../assets/fb_ico.svg?react'
import XIcon from '../../../assets/x_ico.svg?react'
import InIcon from '../../../assets/in_ico.svg?react'

const SocialIcons = ({ variant = '' }) => {
	const iconClass = `${styles.icons} ${variant === 'header' ? styles.headerIcons : ''}`

	return (
		<div className={iconClass}>
			<a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer">
				<FbIcon className={styles.facebook} />
			</a>
			<a href="https://x.com/" target='_blank' rel="noopener noreferrer">
				<XIcon className={styles.x} />
			</a>
			<a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer">
				<InIcon className={styles.linkedin} />
			</a>
		</div>
	)
}

export default SocialIcons