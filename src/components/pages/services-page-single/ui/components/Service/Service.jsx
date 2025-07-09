import styles from './Service.module.css'
import ArrowIco from '../../../../../../assets/services_ico.svg?react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../../../../firebase'

const Service = () => {
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
    <section className={styles.service}>
      <div className={styles.container}>
				<div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.subhead}>Что включает?</h3>
            <h2 className={styles.title}>О сервисе</h2>
            <p className={styles.text}>{service.text}</p>
            <span className={styles.subtitle}>Наша методология:</span>
            <div className={styles.items}>
              <div className={styles.item}>
                <ArrowIco className={styles.ico}/>
                <div className={styles.context}>
                  <span className={styles.subsubtitle}>Этап оценки</span>
                  <span className={styles.subsubtext}>Смысл использования Lorem Ipsum в том, что он имеет более или менее нормальные буквы.</span>
                </div>
              </div>
              <div className={styles.item}>
                <ArrowIco className={styles.ico}/>
                <div className={styles.context}>
                  <span className={styles.subsubtitle}>Этап оценки</span>
                  <span className={styles.subsubtext}>Смысл использования Lorem Ipsum в том, что он имеет более или менее нормальные буквы.</span>
                </div>
              </div>
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
    </section>
  )
}

export default Service