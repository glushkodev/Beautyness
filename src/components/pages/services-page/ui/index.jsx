import PageHeader from "../../../shared/PageHeader/PageHeader"
import Discount from "./components/Discount/Discount"
import Service from "./components/Service/Service"

const ServicesPage = () => {
	return (
		<div>
			<div>
				<PageHeader 
					subtitle="Наши услуги"
					title="Идеальная красота к вашим услугам"
				/>
				<Service />
				<Discount />
			</div>
		</div>
	)
}

export default ServicesPage