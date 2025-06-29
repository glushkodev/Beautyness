import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import { collection, query, orderBy } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../../../firebase'

const BlogPage = () => {
  const q = collection(db, 'blog')
  const [snapshot, loading, error] = useCollection(q)

  if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>Ошибка загрузки</div>

	return (
		<div className={styles.blog}>
			<PageHeader 
				subtitle="Свяжитесь с нами"
				title="Статьи и новости"
			/>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.items}>
             {snapshot?.docs.map(doc => {
              const blog = doc.data()
              return (
                <div key={doc.id} className={styles.item}>
                  <div className={styles.wrapper}>
                    <img
                      className={styles.img}
                      src={blog.img}
                      alt={blog.title}
                    />
                  </div>
                  <div className={styles.btm}>
                    <div className={styles.subtopic}>
                      <span className={styles.date}>{blog.date}</span>
                      <span className={styles.author}>{blog.author}</span>
                    </div>
                    <h3 className={styles.topic}>{blog.title}</h3>
                    <p className={styles.text}>{blog.description}</p>
                  </div>
                </div>
              )
            })}        
          </div>  
				</div>
			</div>
		</div>
	)
}

export default BlogPage