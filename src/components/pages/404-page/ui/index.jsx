import styles from './index.module.css'
import { Link } from "react-router-dom"
import PageHeader from "../../../shared/PageHeader/PageHeader"
import Bg from '../../../../assets/404_bg.png'
import Img from '../../../../assets/404.png'

const PageNotFound = () => {
	return (
		<div className={styles.pnf}>
			<PageHeader 
				subtitle="Страница не найдена"
        title="Страница ошибки 404"
			/>
			<div className={styles.wrapper}>
				<img className={styles.bg} src={Bg} alt="Background image" />
				<div className={styles.container}>
					<div className={styles.content}>
						<img className={styles.img} src={Img} alt="404 image" />
						<h2 className={styles.title}>Страница не найдена!!!</h2>
						<p className={styles.text}>Страница, которую вы ищете, не существует. Попробуйте поискать другую страницу или вернитесь на домашнюю страницу веб-сайта, чтобы найти то, что вы ищете.</p>
						<Link to={'/'} className={styles.link}>Назад домой</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageNotFound