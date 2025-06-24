import styles from './Prices.module.css'
import Img from '../../../../../../assets/prices_img.png'
import Img2 from '../../../../../../assets/prices_img2.png'
import Bg from '../../../../../../assets/prices_bg.png'
import { Link } from 'react-router-dom'

const Prices = () => {
  return (
    <section className={styles.prices}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subhead}>Наши слуги</h3>
          <h2 className={styles.head}>У нас есть опыт сделать вас красивыми</h2>
          <div className={styles.elems}>
            {/* <Bg className={styles.bg}/> */}
            <img className={styles.bg} src={Bg} alt="Bg Image" />
            <img className={styles.img} src={Img} alt="Services Image" />
            <div className={styles.listRight}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.header}>
                    <h4 className={styles.title}>Маски для лица</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.price}>от 48 руб</span>
                  </div>
                  <div className={styles.descr}>Версии развивались с течением времени, иногда случайно.</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.header}>
                    <h4 className={styles.title}>Массаж всего тела</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.price}>от 67 руб</span>
                  </div>
                  <div className={styles.descr}>Версии развивались с течением времени, иногда случайно.</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.header}>
                    <h4 className={styles.title}>Геотермальный спа</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.price}>от 54 руб</span>
                  </div>
                  <div className={styles.descr}>Версии развивались с течением времени, иногда случайно.</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.header}>
                    <h4 className={styles.title}>Расслабляющая сауна</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.price}>от 73 руб</span>
                  </div>
                  <div className={styles.descr}>Версии развивались с течением времени, иногда случайно.</div>
                </div>
              </div>
              <Link to="/services" className={styles.btn}>Записаться</Link>
            </div>
          </div>

          <div className={styles.elemsRight}>
            {/* <Bg className={styles.bg}/> */}
            
            
            <div className={styles.listLeft}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.header}>
                    <h4 className={styles.title}>Маски для лица</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.price}>от 48 руб</span>
                  </div>
                  <div className={styles.descr}>Версии развивались с течением времени, иногда случайно.</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.header}>
                    <h4 className={styles.title}>Массаж всего тела</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.price}>от 67 руб</span>
                  </div>
                  <div className={styles.descr}>Версии развивались с течением времени, иногда случайно.</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.header}>
                    <h4 className={styles.title}>Геотермальный спа</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.price}>от 54 руб</span>
                  </div>
                  <div className={styles.descr}>Версии развивались с течением времени, иногда случайно.</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.header}>
                    <h4 className={styles.title}>Расслабляющая сауна</h4>
                    <span className={styles.dots}></span>
                    <span className={styles.price}>от 73 руб</span>
                  </div>
                  <div className={styles.descr}>Версии развивались с течением времени, иногда случайно.</div>
                </div>
              </div>
              <Link to="/services" className={styles.btn}>Записаться</Link>
            </div>

            <img className={styles.img} src={Img2} alt="Services Image" />
          </div>


        </div>
      </div>
    </section>
  )
}

export default Prices