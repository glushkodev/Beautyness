import styles from './Services.module.css';
import Spa from '../../../../../../assets/services_spa.png';
import Hair from '../../../../../../assets/services_hair.png';
import Body from '../../../../../../assets/services_body.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.item}>
              <img className={styles.img} src={Spa} alt="Services Spa Image" />
              <h3 className={styles.title}>Спа & массаж</h3>
              <p className={styles.text}>Если вы собираетесь использовать предложение Lorem Ipsum, его нужно обязательно спрятать в середине текста.</p>
              <Link to="/services" className={styles.btn}>Читать далее</Link>
            </div>
            <div className={styles.item}>
              <img className={styles.img} src={Hair} alt="Services Hair Image" />
              <h3 className={styles.title}>Волосы & красота</h3>
              <p className={styles.text}>Если вы собираетесь использовать предложение Lorem Ipsum, его нужно обязательно спрятать в середине текста.</p>
              <Link to="/services" className={styles.btn}>Читать далее</Link>
            </div>
            <div className={styles.item}>
              <img className={styles.img} src={Body} alt="Services Body Image" />
              <h3 className={styles.title}>Процедуры для тела</h3>
              <p className={styles.text}>Если вы собираетесь использовать предложение Lorem Ipsum, его нужно обязательно спрятать в середине текста.</p>
              <Link to="/services" className={styles.btn}>Читать далее</Link>
            </div>            
          </div>        
        </div>
      </div>
    </section>
  )
}

export default Services