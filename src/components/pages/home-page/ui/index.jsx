import Welcome from "./components/welcome/Welcome"
import About from './components/About/About'
import Benefits from '../../../shared/Benefits/Benefits'
import Reviews from "../../../shared/Reviews/Reviews"
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import Discount from './components/Discount/Discount'
import Prices from './components/Prices/Prices'

const HomePage = () => {
	return (
		<div>
			<Welcome />
			<Services />
			<About />
			<Prices />
			<Reviews />
			<Benefits />
			<Discount />
			<Blog />
		</div>
	)
}

export default HomePage