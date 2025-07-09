import PageHeader from "../../../shared/PageHeader/PageHeader"
import LazyAnimated from "../../../shared/LazyAnimated/LazyAnimated"
import { lazy } from 'react'

const About = lazy(() => import("./components/About/About"))
const Form = lazy(() => import("../../../shared/Form/Form"))

const ContactPage = () => {
	return (
		<div>
			<div>
				<PageHeader 
					subtitle="Свяжитесь с нами"
					title="Мы готовы помочь Вам 24/7"
				/>
				<LazyAnimated component={About} />
				<LazyAnimated component={Form} />
			</div>
		</div>
	)
}

export default ContactPage