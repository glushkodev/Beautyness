import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import Form from '../../../shared/Form/Form'
import Benefits from '../../../shared/Benefits/Benefits'
import ArrowIco from '../../../../assets/services_ico.svg?react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../../firebase'
import Card from './components/Card/Card'

const ServicesSinglePage = () => {
	const { id } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const docRef = doc(db, 'services', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setService(docSnap.data())
        } else {
          setError('Услуга не найдена')
        }
      } catch (err) {
        setError('Ошибка загрузки данных')
      } finally {
        setLoading(false)
      }
    }

    fetchService()
  }, [id])

	if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>{error}</div>

	return (
		<div className={styles.service}>
			<PageHeader 
				subtitle={"Идеальный сервис"}
				title={service.title}
			/>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.left}>
						<h3 className={styles.subhead}>Что включает?</h3>
						<h2 className={styles.head}>О сервисе</h2>
						<p className={styles.text}>{service.description}</p>
						<span className={styles.subtitle}>Наша методология:</span>
						<div className={styles.items}>
							<div className={styles.item}>
								<ArrowIco className={styles.ico}/>
								<div className={styles.context}>
									<span className={styles.subsubtitle}>Этап оценки</span>
									<span className={styles.subsubtext}>Смысл использования Lorem Ipsum в том, что он имеет более или менее нормальные буквы.</span>
								</div>
							</div>
						</div>
					</div>
					<img className={styles.img} src={service.img} alt={service.title} />
				</div>
			</div>
			<Card />
			<Form />
			<Benefits />
		</div>
	)
}

export default ServicesSinglePage