import styles from './Contacts.module.css';

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<h4 className={styles.title}>Поддерживаем связь</h4>
			<div className={styles.items}>
				<div className={styles.item}>
					<span className={styles.item__title}>Адрес:</span>
					<a className={styles.link} href="https://maps.google.com/" target='blank'>yл. Тестовоая 12А, г. Минск</a>
				</div>
				<div className={styles.item}>
					<span className={styles.item__title}>Эл. почта:</span>
					<a className={styles.link} href="mailto:support@beauty.com">support@beauty.com</a>
				</div>
				<div className={styles.item}>
					<span className={styles.item__title}>Телефон:</span>
					<a className={styles.link} href="tel:+375441234567">+375 (44) 123-45-67</a>
				</div>
			</div>
		</div>
	)
}

export default Contacts