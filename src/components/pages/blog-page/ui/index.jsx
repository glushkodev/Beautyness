import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../../../firebase'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BlogPage = () => {
  const q = collection(db, 'blog')
  const [snapshot, loading, error] = useCollection(q)
  const [visibleCount, setVisibleCount] = useState(6)

  if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>Ошибка загрузки</div>

  const blogs = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() })) || []
  const visibleBlogs = blogs.slice(0, visibleCount)
  const hasMore = visibleCount < blogs.length

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

	return (
		<div className={styles.blog}>
			<PageHeader 
				subtitle="Свяжитесь с нами"
				title="Статьи и новости"
			/>
			<div className={styles.container}>
				<div className={styles.content}>
          <div className={styles.items}>
            <AnimatePresence>
              {visibleBlogs.map(blog => (
                <motion.div
                  key={blog.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={styles.item}
                >
                  <Link to={`/blog/${blog.id}`} className={styles.link}>
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
                  </Link>
                </motion.div>
                ))}
            </AnimatePresence>
          </div>
          <button
            className={styles.btn}
            onClick={handleLoadMore}
            disabled={!hasMore}
          >
            {hasMore ? 'Смотреть больше историй' : 'На данный момент это все новости'}
          </button> 
				</div>
			</div>
		</div>
	)
}

export default BlogPage