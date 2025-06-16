import styles from './SocialIcons.module.css';
import FbIcon from '../../../../../../assets/fb_ico.svg?react';
import TwIcon from '../../../../../../assets/tw_ico.svg?react';
import InIcon from '../../../../../../assets/in_ico.svg?react';


const SocialIcons = () => {
	return (
		<div className={styles.icons}>
			<a href="https://www.facebook.com/">
				<FbIcon className={styles.facebook}/>
			</a>
			<a href="https://x.com/">
				<TwIcon className={styles.x}/>
			</a>
			<a href="https://www.linkedin.com/">
				<InIcon className={styles.linkedin}/>
			</a>
		</div>
	)
}

export default SocialIcons