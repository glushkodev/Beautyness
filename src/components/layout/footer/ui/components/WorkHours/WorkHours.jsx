import styles from './WorkHours.module.css';

const WorkHours = () => (
	<div className={styles.hours}>
		<h4 className={styles.title}>Время работы</h4>
		<div className={styles.days}>
			<span className={styles.text}>Понедельник-пятница: 07:00-18:00</span>
			<span className={styles.text}>Суббота: 09:00-19:00</span>
			<span className={styles.text}>Воскресенье: 09:00-18:00</span>
		</div>
	</div>
);

export default WorkHours