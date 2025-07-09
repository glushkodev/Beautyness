import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState, lazy } from 'react'
import { db } from '../../../../firebase'
import LazyAnimated from '../../../shared/LazyAnimated/LazyAnimated'

const Service = lazy(() => import('./components/Service/Service'))
const Card = lazy(() => import('./components/Card/Card'))
const Form = lazy(() => import('../../../shared/Form/Form'))
const Benefits = lazy(() => import('../../../shared/Benefits/Benefits'))

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
			<LazyAnimated component={Service} />
      <LazyAnimated component={Card} />
      <LazyAnimated component={Form} />
      <LazyAnimated component={Benefits} />
		</div>
	)
}

export default ServicesSinglePage