import { Link } from 'react-router-dom';
import styles from './ReserveButton.module.css';

const ReserveButton = () => {
	return (
		<Link to="/contact" className={styles.btn}>
			<div className={styles.elems}>
				<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.8877 3H3.3877C2.55927 3 1.8877 3.67157 1.8877 4.5V15C1.8877 15.8284 2.55927 16.5 3.3877 16.5H13.8877C14.7161 16.5 15.3877 15.8284 15.3877 15V4.5C15.3877 3.67157 14.7161 3 13.8877 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M11.6377 1.5V4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M5.6377 1.5V4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M1.8877 7.5H15.3877" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
				<div className={styles.text}>Забронировать</div>
			</div>
		</Link>
	)
}

export default ReserveButton