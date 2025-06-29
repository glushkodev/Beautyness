import SocialIcons from '../../../../../shared/SocialIcons/SocialIcons'
import styles from './Experts.module.css'
import { collection, query, limit } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../../../../../firebase'

const Experts = () => {
  const expertsQuery = query(collection(db, 'experts'), limit(3))
  const [snapshot, loading, error] = useCollection(expertsQuery)

  if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>Ошибка загрузки</div>

  return (
    <section className={styles.experts}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subtext}>Познакомьтесь с нашими экспертами</h3>
          <h2 className={styles.title}>Удивительные женщины, стоящие за Beautyness</h2>
          <div className={styles.items}>
            {snapshot?.docs.map(doc => {
              const expert = doc.data()
              return (
                <div key={doc.id} className={styles.item}>
                  <div className={styles.photoWrapper}>
                    <img className={styles.photo} src={expert.photo} alt={expert.name} />
                  </div>
                  <div className={styles.context}>
                    <h3 className={styles.name}>{expert.name}</h3>
                    <h4 className={styles.subtitle}>{expert.subtext}</h4>
                    <p className={styles.text}>{expert.description}</p>
                    <div className={styles.social}>
                      <SocialIcons />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experts