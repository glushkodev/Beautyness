import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import Photo1 from '../../../../assets/expert_photo.png'
import Photo2 from '../../../../assets/expert_photo2.png'
import Photo3 from '../../../../assets/expert_photo3.png'
import Photo4 from '../../../../assets/expert_photo4.png'
import Photo5 from '../../../../assets/expert_photo5.png'
import Photo6 from '../../../../assets/expert_photo6.png'
import SocialIcons from '../../../shared/SocialIcons/SocialIcons'

const TeamPage = () => {
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
            <div className={styles.item}>
              <div className={styles.photoWrapper}>
								<img className={styles.photo} src={Photo1} alt="Expert Photo" />
							</div>
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
              <div className={styles.photoWrapper}>
								<img className={styles.photo} src={Photo2} alt="Expert Photo" />
							</div>
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
              <div className={styles.photoWrapper}>
								<img className={styles.photo} src={Photo3} alt="Expert Photo" />
							</div>
              <div className={styles.context}>
                <h3 className={styles.name}>Ольга Крылова</h3>
                <h4 className={styles.subtitle}>Эксперт по красоте</h4>
                <p className={styles.text}>Большинство из них подверглись изменениям, например, были добавлены юмор или случайные слова</p>
                <div className={styles.social}>
                  <SocialIcons />
                </div>
              </div>        
            </div>  
						<div className={styles.item}>
              <div className={styles.photoWrapper}>
								<img className={styles.photo} src={Photo4} alt="Expert Photo" />
							</div>
              <div className={styles.context}>
                <h3 className={styles.name}>Светлана Орлова</h3>
                <h4 className={styles.subtitle}>Эксперт по красоте</h4>
                <p className={styles.text}>Большинство из них подверглись изменениям, например, были добавлены юмор или случайные слова</p>
                <div className={styles.social}>
                  <SocialIcons />
                </div>
              </div>        
            </div> 
						<div className={styles.item}>
              <div className={styles.photoWrapper}>
								<img className={styles.photo} src={Photo5} alt="Expert Photo" />
							</div>
              <div className={styles.context}>
                <h3 className={styles.name}>Наталья Власова</h3>
                <h4 className={styles.subtitle}>Эксперт по красоте</h4>
                <p className={styles.text}>Большинство из них подверглись изменениям, например, были добавлены юмор или случайные слова</p>
                <div className={styles.social}>
                  <SocialIcons />
                </div>
              </div>        
            </div> 
						<div className={styles.item}>
              <div className={styles.photoWrapper}>
								<img className={styles.photo} src={Photo6} alt="Expert Photo" />
							</div>
              <div className={styles.context}>
                <h3 className={styles.name}>Мария Кузнецова</h3>
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
		</div>
	)
}

export default TeamPage