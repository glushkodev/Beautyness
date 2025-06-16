import styles from './index.module.css'
import Welcome from "./components/welcome/Welcome"

const HomePage = () => {
	return (
		<div className={styles.welcome}>
			<Welcome />
		</div>
	)
}

export default HomePage