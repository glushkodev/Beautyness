import styles from './index.module.css'
import Welcome from "./components/welcome/Welcome"
import About from './components/About/About'

const HomePage = () => {
	return (
		<div className={styles.welcome}>
			<Welcome />
			<About />
		</div>
	)
}

export default HomePage