import styles from './Discount.module.css'
import Dots from '../../../../../../assets/dots_ico.svg?react'
import Percent from '../../../../../../assets/percent_ico.svg?react'

const Discount = () => {
  return (
    <section className={styles.discount}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.subhead}>Фиксированная скидка</h3>
            <h2 className={styles.title}>Получите скидку до 50% на самые популярные услуги...</h2>
            <p className={styles.text}>Существует множество вариантов отрывков Lorem Ipsum, но большинство из них подверглись изменениям в той или иной форме, в частности из-за добавления юмора или случайных слов.</p>
            <div className={styles.banner}>
              <div className={styles.contact}>
                <div className={styles.item}>
                  <Dots className={styles.dots} />
                  <div className={styles.contacts} >
                    <span className={styles.label}>Пишите нам :</span>
                    <a className={styles.link} href="mailto:support@beauty.com">support@beauty.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <Dots className={styles.dots} />
                  <div className={styles.contacts} >
                    <span className={styles.label}>Звоните нам :</span>
                    <a className={styles.link} href="tel:+375441234567">+375 (44) 123-45-67</a>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <span className={styles.get}>– Получите –</span>
                <Percent className={styles.percent} />
                <span className={styles.discountText}>Скидку</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount