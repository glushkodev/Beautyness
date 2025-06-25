import PageHeader from "../../../shared/PageHeader/PageHeader"
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
			</div>
		</div>
	)
}

export default AboutPage