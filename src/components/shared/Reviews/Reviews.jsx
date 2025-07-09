import styles from './Reviews.module.css'
import ReviewIcon from '../../../assets/reviews_icon.svg?react'
import Cursor from '../../../assets/cursor.svg?react'
import StarRating from '../../pages/home-page/ui/components/StarRating/StarRating'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../../firebase'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'

const Reviews = () => {
  const q = collection(db, 'reviews')
  const [snapshot, loading, error] = useCollection(q)

  if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>Ошибка загрузки отзывов</div>

  const reviews = snapshot?.docs.map(doc => doc.data())

  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Cursor className={styles.cursor}/>
          <h3 className={styles.subhead}>Отзывы</h3>
          <h2 className={styles.title}>Что говорят наши клиенты...</h2>
          <div className={styles.items}>
            <Swiper
              modules={[A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}    
              centeredSlides={true}           
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                1025: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
              }}
              className={styles.swiper}
            >
            {reviews?.map((review, index) => (
              <SwiperSlide key={index}>
                <div className={styles.item}>
                  <span className={styles.text}>{review.text}</span>
                  <div className={styles.btm}>
                    <div className={styles.author}>
                      <img
                        className={styles.photo}
                        src={review.photo}
                        alt={review.name}
                      />
                      <div className={styles.about}>
                        <StarRating rating={review.rate} />
                        <span className={styles.name}>{review.name}</span>
                        <span className={styles.sity}>{review.city}</span>
                      </div>
                    </div>
                    <ReviewIcon className={styles.img} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>        
        </div>
      </div>
    </section>
  )
}

export default Reviews