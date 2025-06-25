import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'

import Back from '../../../../assets/contacts_bg.png'
import Img from '../../../../assets/locations_img1.png'
import Img2 from '../../../../assets/locations_img2.png'
import Img3 from '../../../../assets/locations_img3.png'
import EmailIco from '../../../../assets/email_ico.svg?react'
import HouseIco from '../../../../assets/house_ico.svg?react'
import PhoneIco from '../../../../assets/phon_ico.svg?react'

import { Link } from 'react-router-dom'


const LocationsPage = () => {
	return (
		<div className={styles.locations}>
			<PageHeader 
				subtitle="Мы здесь!"
				title="Наши местоположения"
			/>
			<div className={styles.container}>
				<div className={styles.content}>

					<div className={styles.elem}>
						<div className={styles.left}>
							<img className={styles.back} src={Back} alt="Background image" />
							<img className={styles.img} src={Img} alt="Main image" />
						</div>
						<div className={styles.right}>
							<h3 className={styles.subtext}>Республика Беларусь</h3>
							<h2 className={styles.city}>Минск</h2>
							<div className={styles.items}>
								<div className={styles.item}>
									<div className={styles.icon}><HouseIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Посетите нас:</span>
										<a className={styles.link} href="https://maps.google.com/" target='_blank' rel="noopener noreferrer">yл. Тестовоая 12А, г. Минск</a>
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.icon}><EmailIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Напишите нам:</span>
										<a className={styles.link} href="mailto:support@beauty.com">support@beauty.com</a>
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.icon}><PhoneIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Позвоните нам:</span>
										<a className={styles.link} href="tel:+375441234567">+375 (44) 123-45-67</a>
									</div>
								</div>
							</div>
							<Link to="/services" className={styles.btn}>Забронировать</Link>
						</div>
					</div>

					<div className={styles.elem}>
						<div className={styles.left}>
							<img className={styles.back} src={Back} alt="Background image" />
							<img className={styles.img} src={Img2} alt="Main image" />
						</div>
						<div className={styles.right}>
							<h3 className={styles.subtext}>Республика Беларусь</h3>
							<h2 className={styles.city}>Брест</h2>
							<div className={styles.items}>
								<div className={styles.item}>
									<div className={styles.icon}><HouseIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Посетите нас:</span>
										<a className={styles.link} href="https://maps.google.com/" target='_blank' rel="noopener noreferrer">yл. Тестовоая 5Б, г. Брест</a>
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.icon}><EmailIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Напишите нам:</span>
										<a className={styles.link} href="mailto:support@beauty.com">support@beauty.com</a>
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.icon}><PhoneIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Позвоните нам:</span>
										<a className={styles.link} href="tel:+375441234567">+375 (33) 111-22-33</a>
									</div>
								</div>
							</div>
							<Link to="/services" className={styles.btn}>Забронировать</Link>
						</div>
					</div>

					<div className={styles.elem}>
						<div className={styles.left}>
							<img className={styles.back} src={Back} alt="Background image" />
							<img className={styles.img} src={Img3} alt="Main image" />
						</div>
						<div className={styles.right}>
							<h3 className={styles.subtext}>Республика Беларусь</h3>
							<h2 className={styles.city}>Гомель</h2>
							<div className={styles.items}>
								<div className={styles.item}>
									<div className={styles.icon}><HouseIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Посетите нас:</span>
										<a className={styles.link} href="https://maps.google.com/" target='_blank' rel="noopener noreferrer">yл. Тестовоая 44, г. Гомель</a>
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.icon}><EmailIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Напишите нам:</span>
										<a className={styles.link} href="mailto:support@beauty.com">support@beauty.com</a>
									</div>
								</div>
								<div className={styles.item}>
									<div className={styles.icon}><PhoneIco className={styles.ico} /></div>
									<div className={styles.context}>
										<span className={styles.subsubtitle}>Позвоните нам:</span>
										<a className={styles.link} href="tel:+375441234567">+375 (29) 345-67-89</a>
									</div>
								</div>
							</div>
							<Link to="/services" className={styles.btn}>Забронировать</Link>
						</div>
					</div>


				</div>
			</div>
		</div>
	)
}

export default LocationsPage