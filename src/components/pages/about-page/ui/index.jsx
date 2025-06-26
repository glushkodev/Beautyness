import PageHeader from "../../../shared/PageHeader/PageHeader"
import Style from "./components/Style/Style"
import Values from "./components/Values/Values"

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
			</div>
		</div>
	)
}

export default AboutPage