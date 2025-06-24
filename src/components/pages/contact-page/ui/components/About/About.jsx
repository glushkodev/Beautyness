import styles from './About.module.css';
// import BackImage from '../../../../../../assets/about_bg.png';
// import AboutIcon from '../../../../../../assets/about_icon.svg?react';


const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* <div className={styles.content}> */}
          {/* <div className={styles.left}>
            <h3 className={styles.subtext}>О нас</h3>
            <h2 className={styles.title}>Красота — это прежде всего комфорт в собственной коже!</h2>
            <span className={styles.text}>Существует множество вариантов отрывков Lorem Ipsum, но большинство из них подверглись изменениям в той или иной форме, например, из-за добавления случайных слов, которые не выглядят даже во многих пакетах систем.</span>
            <div className={styles.items}>
              <div className={styles.item}>
                <AboutIcon />
                <span className={styles.subtitle}>Бьюти Эксперты</span>
              </div>
              <div className={styles.item}>
                <AboutIcon2 />
                <span className={styles.subtitle}>Отличные Услуги</span>
              </div>
              <div className={styles.item}>
                <AboutIcon3 />
                <span className={styles.subtitle}>100% Подлинный</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img className={styles.back} src={BackImage} alt="Background image" />
            <img className={styles.img} src={AboutImage} alt="Main image" />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About