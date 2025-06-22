import styles from './index.module.css'
import Welcome from "./components/welcome/Welcome"
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Reviews from './components/Reviews/Reviews'
import Services from './components/Services/Services'

const HomePage = () => {
	return (
		<div className={styles.welcome}>
			<Welcome />
			<Services />
			<About />
			<Reviews />
			<Benefits />
		</div>
	)
}

export default HomePage