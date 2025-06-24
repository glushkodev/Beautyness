import PageHeader from "../../../shared/PageHeader/PageHeader"
import About from './components/About/About'
import Form from "./components/Form/Form"

const ContactPage = () => {
	return (
		<div>
			<div>
				<PageHeader 
					subtitle="Свяжитесь с нами"
					title="Мы готовы помочь Вам 24/7"
				/>
				<About />
				<Form />
			</div>
		</div>
	)
}

export default ContactPage