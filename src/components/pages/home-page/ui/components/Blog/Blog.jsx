import styles from './Blog.module.css';
import BlogImg1 from '../../../../../../assets/blog_img.png';
import BlogImg2 from '../../../../../../assets/blog_img2.png';
import BlogImg3 from '../../../../../../assets/blog_img3.png';

import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subhead}>Наш блог</h3>
          <h2 className={styles.title}>Последние обновления</h2>
          <div className={styles.items}>

            <div className={styles.item}>
              <img className={styles.img} src={BlogImg1} alt="Blog Image" />
              <div className={styles.btm}>
                <div className={styles.subtopic}>
                  <span className={styles.date}>25 июня 2025</span>
                  <span className={styles.author}>Алина Соколова</span>
                </div>
                <h3 className={styles.topic}>Энергоэффективность гидротерапии</h3>
                <p className={styles.text}>Смысл использования Lorem Ipsum в том, что придание ему читабельного вида приведет к концу.</p>
              </div>
            </div>

            <div className={styles.item}>
              <img className={styles.img} src={BlogImg2} alt="Blog Image" />
              <div className={styles.btm}>
                <div className={styles.subtopic}>
                  <span className={styles.date}>11 июня 2025</span>
                  <span className={styles.author}>Артем Волков</span>
                </div>
                <h3 className={styles.topic}>Советы по улучшению тела с помощью очищения</h3>
                <p className={styles.text}>Смысл использования Lorem Ipsum в том, что придание ему читабельного вида приведет к концу.</p>
              </div>
            </div>

            <div className={styles.item}>
              <img className={styles.img} src={BlogImg3} alt="Blog Image" />
              <div className={styles.btm}>
                <div className={styles.subtopic}>
                  <span className={styles.date}>31 мая 2025</span>
                  <span className={styles.author}>Павел Громов</span>
                </div>
                <h3 className={styles.topic}>Ощутите красоту в нашем салоне</h3>
                <p className={styles.text}>Смысл использования Lorem Ipsum в том, что придание ему читабельного вида приведет к концу.</p>
              </div>
            </div>

          </div>  
          <Link to="/blog" className={styles.btn}>Смотреть больше историй</Link>      
        </div>
      </div>
    </section>
  )
}

export default Blog