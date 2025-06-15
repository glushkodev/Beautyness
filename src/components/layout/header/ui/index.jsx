// import { Link } from "react-router"
import ListItem from "./components/ListItem"
// import { useCart } from "../../../shared/context/CartContext"

import { Link } from "react-router-dom"


const Header = () => {
	// const { cart } = useCart()

	return (
		<header>
			<div className="logo">
				<img src="#" alt="logo" />
			</div>
			<nav>
				<ul>
					<ListItem><Link to={'/'}>Главная</Link></ListItem>
					<ListItem>Страницы
						<ul>
							<ListItem><Link to={'/blog'}>О нас</Link></ListItem>
							<ListItem><Link to={'/team'}>Наша команда</Link></ListItem>
							<ListItem><Link to={'/locations'}>Где мы находимся</Link></ListItem>
						</ul>
					</ListItem>
					<ListItem><Link to={'/services'}>Услуги</Link></ListItem>
					<ListItem><Link to={'/contact'}>Контакты</Link></ListItem>			
				</ul>
			</nav>
		</header>
	)
}

export default Header