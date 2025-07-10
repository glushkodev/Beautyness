import styles from './Blog.module.css'
import { collection, query, limit } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../../../../../firebase'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogQuery = query(collection(db, 'blog'), limit(3))
  const [snapshot, loading, error] = useCollection(blogQuery)

  if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>Ошибка загрузки</div>
  
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subhead}>Наш блог</h3>
          <h2 className={styles.title}>Последние обновления</h2>
          <div className={styles.items}>
            {snapshot?.docs.map(doc => {
              const blog = doc.data()
              const id = doc.id
              return (
                <Link to={`/blog/${id}`} key={id} className={styles.item}>
                  <div className={styles.wrapper}>
                    <img className={styles.img} src={blog.img} alt={blog.title} />
                  </div>
                  <div className={styles.btm}>
                    <div className={styles.subtopic}>
                      <span className={styles.date}>{blog.date}</span>
                      <span className={styles.author}>{blog.author}</span>
                    </div>
                    <h3 className={styles.topic}>{blog.title}</h3>
                    <p className={styles.text}>{blog.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>  
          <Link to="/blog" className={styles.btn}>Смотреть больше историй</Link>      
        </div>
      </div>
    </section>
  )
}

export default Blog