import styles from './SocialIcons.module.css';
import FbIcon from '../../../../../../assets/fb_ico.svg?react';
import TwIcon from '../../../../../../assets/tw_ico.svg?react';
import InIcon from '../../../../../../assets/in_ico.svg?react';
import InstIcon from '../../../../../../assets/inst_ico.svg?react';


const SocialIcons = () => (
	<div className={styles.icons}>
		<a className={styles.link} href="https://www.facebook.com/">
			<FbIcon className={styles.facebook}/>
		</a>
		<a className={styles.link} href="https://x.com/">
			<TwIcon className={styles.x}/>
		</a>
		<a className={styles.link} href="https://www.linkedin.com/">
			<InIcon className={styles.linkedin}/>
		</a>
		<a className={styles.link} href="https://www.instagram.com/">
			<InstIcon className={styles.instagram}/>
		</a>
	</div>
);

export default SocialIcons