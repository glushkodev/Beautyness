import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';
import BorderImage from '../../../../../../assets/welcome_border.svg?react';
import WelcomeImage from '../../../../../../assets/welcome_img.png';

const Welcome = () => {
  return (
    <section className={styles.splitBackground}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.subtitle}>
              <h2 className={styles.subtext}>Добро пожаловать в Beautyness!!!</h2>
            </div>
            <h1 className={styles.title}>Красота — это сила, улыбка — ее меч.</h1>
            <span className={styles.text}>В Ipsum доступно множество вариаций отрывков, большинство из которых в той или иной форме подверглись изменениям.</span>
            <Link to="/contact" className={styles.btn}>Забронировать</Link>
          </div>
          <div className={styles.right}>
            <BorderImage className={styles.border}/>
            <img className={styles.img} src={WelcomeImage} alt="Main image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome