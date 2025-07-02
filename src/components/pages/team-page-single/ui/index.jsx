import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import SocialIcons from '../../../shared/SocialIcons/SocialIcons'
import EmailIco from '../../../../assets/email_ico.svg?react'
import PhoneIco from '../../../../assets/phon_ico.svg?react'
import { db } from '../../../../firebase'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const TeamSinglePage = () => {
   const { id } = useParams()
  const [expert, setExpert] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchExpert = async () => {
      try {
        const docRef = doc(db, 'experts', id)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          setExpert(docSnap.data())
        } else {
          setError('Эксперт не найден')
        }
      } catch (err) {
        setError('Ошибка загрузки')
      } finally {
        setLoading(false)
      }
    }

    fetchExpert()
  }, [id])

  if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>{error}</div>

	return (
		<div className={styles.team}>
			<PageHeader 
				subtitle="Эксперт"
				title="Творческая команда красоты"
			/>
			<div className={styles.container}>
        <div className={styles.content}>
          <img className={styles.photo} src={expert.photo} alt={expert.name} />
          <div className={styles.right}>
            <h4 className={styles.subtext}>{expert.subtext}</h4>
            <h3 className={styles.name}>{expert.name}</h3>
            <p className={styles.text}>{expert.text}</p>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.icon}><PhoneIco className={styles.ico} /></div>
                <a className={styles.link} href={`tel:${expert.tel}`}>{expert.tel}</a>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}><EmailIco className={styles.ico} /></div>
                <a className={styles.link} href={`mailto:${expert.email}`}>{expert.email}</a>
              </div>
            </div>
            <Link to="/services" className={styles.btn}>Забронировать</Link>
            <div className={styles.social}>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
		</div>
	)
}

export default TeamSinglePage