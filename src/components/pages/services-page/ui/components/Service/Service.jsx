import styles from './Service.module.css'
import Img from '../../../../../../assets/prices_img.png'
import Img2 from '../../../../../../assets/prices_img2.png'
import Img3 from '../../../../../../assets/prices_img3.png'
import Img4 from '../../../../../../assets/prices_img4.png'
import Img5 from '../../../../../../assets/prices_img5.png'
import Bg from '../../../../../../assets/prices_bg.png'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../../../../../firebase'

const Service = () => {
  const q = collection(db, 'services')
  const [snapshot, loading, error] = useCollection(q)

  if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>Ошибка загрузки</div>

  const services = snapshot?.docs.map(doc => doc.data())

   const chunkServices = (arr, size) => {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }

  const serviceChunks = chunkServices(services, 4)

  const renderServiceList = (chunk) => (
    <div className={styles.list}>
      {chunk.map((service, idx) => (
        <div key={idx} className={styles.item}>
          <div className={styles.header}>
            <h4 className={styles.title}>{service.title}</h4>
            <span className={styles.dots}></span>
            <span className={styles.price}>от {service.price} руб</span>
          </div>
          <div className={styles.descr}>{service.subtext}</div>
        </div>
      ))}
    </div>
  )

  return (
    <section className={styles.service}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subhead}>Наши слуги</h3>
          <h2 className={styles.head}>У нас есть опыт сделать вас красивыми</h2>
          {serviceChunks[0] && (
            <div className={styles.elems}>
              <img className={styles.bg} src={Bg} alt="Bg Image" />
              <img className={styles.img} src={Img} alt="Services Image" />
              <div className={styles.listRight}>
                {renderServiceList(serviceChunks[0])}
              </div>
            </div>
          )}
          {serviceChunks[1] && (
            <div className={styles.elemsRight}>
              <div className={styles.listLeft}>
                {renderServiceList(serviceChunks[1])}
              </div>
              <img className={styles.img} src={Img2} alt="Services Image" />
            </div>
          )}
          {serviceChunks[2] && (
            <div className={styles.elems}>
              <img className={styles.bg} src={Bg} alt="Bg Image" />
              <img className={styles.img} src={Img3} alt="Services Image" />
              <div className={styles.listRight}>
                {renderServiceList(serviceChunks[2])}
              </div>
            </div>
          )}
          {serviceChunks[3] && (
            <div className={styles.elemsRight}>
              <div className={styles.listLeft}>
                {renderServiceList(serviceChunks[3])}
              </div>
              <img className={styles.img} src={Img4} alt="Services Image" />
            </div>
          )}
          {serviceChunks[4] && (
            <div className={styles.elems}>
              <img className={styles.img} src={Img5} alt="Services Image" />
              <div className={styles.listRight}>
                {renderServiceList(serviceChunks[4])}
              </div>
            </div>
          )}    
        </div>
      </div>
    </section>
  )
}

export default Service