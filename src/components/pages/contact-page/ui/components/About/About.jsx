import styles from './About.module.css'
import Img from '../../../../../../assets/contacts_img.png'
import Bg from '../../../../../../assets/contacts_bg.png'
import HouseIco from '../../../../../../assets/house_ico.svg?react'
import EmailIco from '../../../../../../assets/email_ico.svg?react'
import PhoneIco from '../../../../../../assets/phon_ico.svg?react'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img className={styles.bg} src={Bg} alt="Background image" />
            <img className={styles.img} src={Img} alt="Main image" />
          </div>
          <div className={styles.right}>
            <h3 className={styles.subtext}>Свяжитесь с нами!</h3>
            <h2 className={styles.title}>Мы всегда готовы вам помочь...</h2>
            <p className={styles.text}>Существует множество вариантов отрывков Lorem Ipsum, но большинство из них подверглись изменениям, что потребовало покупки множества издательских систем.</p>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.icon}><HouseIco className={styles.ico} /></div>
                <div className={styles.context}>
                  <span className={styles.subtitle}>Посетите нас:</span>
                  <a className={styles.link} href="https://maps.google.com/" target='_blank' rel="noopener noreferrer">yл. Тестовоая 12А, г. Минск</a>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}><EmailIco className={styles.ico} /></div>
                <div className={styles.context}>
                  <span className={styles.subtitle}>Напишите нам:</span>
                  <a className={styles.link} href="mailto:support@beauty.com">support@beauty.com</a>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}><PhoneIco className={styles.ico} /></div>
                <div className={styles.context}>
                  <span className={styles.subtitle}>Позвоните нам:</span>
                  <a className={styles.link} href="tel:+375441234567">+375 (44) 123-45-67</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About