import styles from './Style.module.css'
import Img from '../../../../../../assets/style_img.png'

const Style = () => {
  return (
    <section className={styles.style}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.bg}></div>
            <img className={styles.img} src={Img} alt="Women image" />
          </div>
          <div className={styles.right}>
            <h3 className={styles.subtext}>О нас</h3>
            <h2 className={styles.title}>Стиль — отражение вашего отношения & вашей личности</h2>
            <p className={styles.text}>Большинство из них подверглись изменениям в той или иной форме, например, были добавлены юмор или случайные слова, которые используются в настольных издательских системах.</p>
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Style