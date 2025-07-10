import styles from './Card.module.css'
import CheckIco from '../../../../../../assets/check_ico.svg?react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subhead}>Легкое и доступное бронирование</h3>
          <h2 className={styles.title}>Членские карты</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.left}>
                <span className={styles.subtitle}>Комфортный отдых</span>
                <div className={styles.subitems}>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Снимает напряжение</span>
                  </div>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Снимает боль в пояснице</span>
                  </div>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Лечит спортивные травмы</span>
                  </div>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Увеличивает подвижность</span>
                  </div>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Увеличивает силу</span>
                  </div>
                </div>
                <Link to={'/contact'} className={styles.link}>Подписаться сейчас</Link>
              </div>
              <div className={styles.right}>
                <div className={styles.price}>
                  <span className={styles.subprice}>69 руб</span>
                  <span className={styles.month}>в месяц</span>
                </div>
                <div className={styles.tarif}>
                  <span className={styles.golden}>Золотая <br />карта</span>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.left}>
                <span className={styles.subtitle}>Роскошный отдых</span>
                <div className={styles.subitems}>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Снимает напряжение</span>
                  </div>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Снимает боль в пояснице</span>
                  </div>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Лечит спортивные травмы</span>
                  </div>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Увеличивает подвижность</span>
                  </div>
                  <div className={styles.subitem}>
                    <CheckIco className={styles.ico}/>
                    <span className={styles.subsubtitle}>Увеличивает силу</span>
                  </div>
                </div>
                <Link to={'/contact'} className={styles.link}>Подписаться сейчас</Link>
              </div>
              <div className={styles.right}>
                <div className={styles.price}>
                  <span className={styles.subprice}>97 руб</span>
                  <span className={styles.month}>в месяц</span>
                </div>
                <div className={styles.tarif}>
                  <div className={styles.golden}>Платина</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card