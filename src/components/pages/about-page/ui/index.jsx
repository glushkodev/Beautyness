import PageHeader from "../../../shared/PageHeader/PageHeader"
import Style from "./components/Style/Style"
import Values from "./components/Values/Values"
import Reviews from '../../../shared/Reviews/Reviews'
import Follow from "./components/Follow/Follow"
import Experts from "./components/Experts/Experts"

const AboutPage = () => {
	return (
		<div>
			<div>
				<PageHeader 
					subtitle="Короткая история о нас"
					title="Большая история, стоящая за нашим центром красоты"
				/>
				<Values />
				<Style />
				<Experts />
				<Reviews />
				<Follow />
			</div>
		</div>
	)
}

export default AboutPage