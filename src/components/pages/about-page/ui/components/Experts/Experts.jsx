import SocialIcons from '../../../../../shared/SocialIcons/SocialIcons'
import styles from './Experts.module.css'
import Photo1 from '../../../../../../assets/expert_photo.png'
import Photo2 from '../../../../../../assets/expert_photo2.png'
import Photo3 from '../../../../../../assets/expert_photo3.png'

const Experts = () => {
  return (
    <section className={styles.experts}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subtext}>Познакомьтесь с нашими экспертами</h3>
          <h2 className={styles.title}>Удивительные женщины, стоящие за Beautyness</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <img className={styles.photo} src={Photo1} alt="Expert Photo" />
              <div className={styles.context}>
                <h3 className={styles.name}>Алина Соколова</h3>
                <h4 className={styles.subtitle}>Эксперт по красоте</h4>
                <p className={styles.text}>Большинство из них подверглись изменениям, например, были добавлены юмор или случайные слова</p>
                <div className={styles.social}>
                  <SocialIcons />
                </div>
              </div>        
            </div>
            <div className={styles.item}>
              <img className={styles.photo} src={Photo2} alt="Expert Photo" />
              <div className={styles.context}>
                <h3 className={styles.name}>Екатерина Морозова</h3>
                <h4 className={styles.subtitle}>Эксперт по красоте</h4>
                <p className={styles.text}>Большинство из них подверглись изменениям, например, были добавлены юмор или случайные слова</p>
                <div className={styles.social}>
                  <SocialIcons />
                </div>
              </div>        
            </div>
            <div className={styles.item}>
              <img className={styles.photo} src={Photo3} alt="Expert Photo" />
              <div className={styles.context}>
                <h3 className={styles.name}>Ольга Крылова</h3>
                <h4 className={styles.subtitle}>Эксперт по красоте</h4>
                <p className={styles.text}>Большинство из них подверглись изменениям, например, были добавлены юмор или случайные слова</p>
                <div className={styles.social}>
                  <SocialIcons />
                </div>
              </div>        
            </div>                
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experts