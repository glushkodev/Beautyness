import styles from './Follow.module.css'
import Img1 from '../../../../../../assets/follow_img.png'
import Img2 from '../../../../../../assets/follow_img2.png'
import Img3 from '../../../../../../assets/follow_img3.png'
import { Link } from 'react-router-dom'

const Follow = () => {
  return (
    <section className={styles.follow}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h3 className={styles.subtext}>Поделитесь нами</h3>
              <h2 className={styles.title}>Подпишитесь на нас в Instagram</h2>
              <p className={styles.text}>Большинство из них подверглись изменениям в той или иной форме, например, были добавлены юмор или случайные слова, которые используются в настольных издательских системах.</p>
              <img className={styles.img1} src={Img1} alt="Content Image" />
            </div>
            <div className={styles.images}>
              <img className={styles.img} src={Img2} alt="Content Image" />
              <img className={styles.img} src={Img3} alt="Content Image" />
            </div>
          </div>
          <Link to={'/contact'} className={styles.link}>Связаться с нами</Link>        
        </div>
      </div>
    </section>
  )
}

export default Follow