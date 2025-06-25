import styles from './Values.module.css'
import MenIco from '../../../../../../assets/men_icon.svg?react'
import FlowerIco from '../../../../../../assets/flower_icon.svg?react'
import GenuinIco from '../../../../../../assets/genuin_icon.svg?react'

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subtext}>Наши ценности</h3>
          <h2 className={styles.title}>Рабочие ценности, ради которых мы процветаем</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.icon}><MenIco className={styles.ico} /></div>
              <div className={styles.context}>
                <h3 className={styles.subtitle}>Эксперты по красоте</h3>
                <p className={styles.text}>Большинство из них подверглись изменениям в той или иной форме, например, были добавлены юмор или случайные слова, которые используются в настольных издательских системах.</p>
              </div>        
            </div>
            <div className={styles.item}>
              <div className={styles.icon}><FlowerIco className={styles.ico} /></div>
              <div className={styles.context}>
                <h3 className={styles.subtitle}>Эксперты по красоте</h3>
                <p className={styles.text}>Большинство из них подверглись изменениям в той или иной форме, например, были добавлены юмор или случайные слова, которые используются в настольных издательских системах.</p>
              </div>        
            </div>
            <div className={styles.item}>
              <div className={styles.icon}><GenuinIco className={styles.ico} /></div>
              <div className={styles.context}>
                <h3 className={styles.subtitle}>Эксперты по красоте</h3>
                <p className={styles.text}>Большинство из них подверглись изменениям в той или иной форме, например, были добавлены юмор или случайные слова, которые используются в настольных издательских системах.</p>
              </div>        
            </div>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values