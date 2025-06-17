import styles from './index.module.css'
import Welcome from "./components/welcome/Welcome"
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'

const HomePage = () => {
	return (
		<div className={styles.welcome}>
			<Welcome />
			<About />
			<Benefits />
		</div>
	)
}

export default HomePage