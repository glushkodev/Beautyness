import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import SocialIcons from '../../../shared/SocialIcons/SocialIcons'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../../../../firebase'

const TeamPage = () => {
  const [value, loading, error] = useCollection(collection(db, 'experts'))

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка: {error.message}</p>

  const experts = value?.docs.map(doc => ({ id: doc.id, ...doc.data() })) || []

	return (
		<div className={styles.team}>
			<PageHeader 
				subtitle="Команда красоты"
				title="Эксперты по красоте"
			/>
			<div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subtext}>Познакомьтесь с нашими экспертами</h3>
          <h2 className={styles.title}>Удивительные женщины, стоящие за Beautyness</h2>
          <div className={styles.items}>
            {experts.map(expert => (
              <div key={expert.id} className={styles.item}>
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
            ))}
          </div>
        </div>
      </div>
		</div>
	)
}

export default TeamPage