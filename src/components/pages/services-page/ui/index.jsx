import PageHeader from "../../../shared/PageHeader/PageHeader"
import LazyAnimated from '../../../shared/LazyAnimated/LazyAnimated'
import { lazy } from 'react'

const Service = lazy(() => import('./components/Service/Service'))
const Discount = lazy(() => import('./components/Discount/Discount'))

const ServicesPage = () => {
	return (
		<div>
			<div>
				<PageHeader 
					subtitle="Наши услуги"
					title="Идеальная красота к вашим услугам"
				/>
				<LazyAnimated component={Service} />
				<LazyAnimated component={Discount} />
			</div>
		</div>
	)
}

export default ServicesPage