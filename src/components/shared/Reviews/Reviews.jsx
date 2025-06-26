import styles from './Reviews.module.css';
import ReviewIcon from '../../../assets/reviews_icon.svg?react';
import ReviewAuthor from '../../../assets/reviews_author.png';
import ReviewAuthor2 from '../../../assets/reviews_author2.png';
import StarRating from '../../pages/home-page/ui/components/StarRating/StarRating';

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subhead}>Отзывы</h3>
          <h2 className={styles.title}>Что говорят наши клиенты...</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <span className={styles.text}>“ Давно установленный факт, что читатель будет отвлекаться на читаемое содержимое страницы, когда смотрит на ее макет. Смысл использования Lorem распределения в том, чтобы выглядеть читаемым русским языком “</span>
              <div className={styles.btm}>
                <div className={styles.author}>
                  <img className={styles.photo} src={ReviewAuthor} alt="Review Author Image" />
                  <div className={styles.about}>
                    <StarRating rating={4.5} />
                    <span className={styles.name}>Николай Иванов</span>
                    <span className={styles.sity}>Могилев</span>
                  </div>
                </div>
                <ReviewIcon className={styles.img}/>
              </div>
            </div>

            <div className={styles.item}>
              <span className={styles.text}>“ Давно установленный факт, что читатель будет отвлекаться на читаемое содержимое страницы, когда смотрит на ее макет. Смысл использования Lorem распределения в том, чтобы выглядеть читаемым русским языком “</span>
              <div className={styles.btm}>
                <div className={styles.author}>
                  <img className={styles.photo} src={ReviewAuthor2} alt="Review Author Image" />
                  <div className={styles.about}>
                    <StarRating rating={4.0} />
                    <span className={styles.name}>Анастасия Петрова</span>
                    <span className={styles.sity}>Брест</span>
                  </div>
                </div>
                <ReviewIcon className={styles.img}/>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </section>
  )
}

export default Reviews