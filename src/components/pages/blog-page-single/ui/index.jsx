import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../../firebase'
import SocialIconsFoot from '../../../shared/SocialIconsFoot/SocialIconsFoot'

const BlogSinglePage = () => {
	const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, 'blog', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setBlog(docSnap.data())
        } else {
          setError('Пост не найден')
        }
      } catch (err) {
        setError('Ошибка загрузки данных')
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

	if (loading) return <div className={styles.spinner}>Загрузка...</div>
  if (error) return <div className={styles.error}>{error}</div>

	return (
		<div className={styles.blog}>
			<PageHeader 
				subtitle={`${blog.author} / Красота и здоровье`}
				title={blog.title}
			/>
			<div className={styles.container}>
				<div className={styles.content}>
					<span className={styles.date}>{blog.date}</span>
					<div className={styles.description}>{blog.description}</div>
					<img className={styles.img} src={blog.img} alt={blog.title} />
					<div className={styles.elems}>
						<div className={styles.left}>
							<div className={styles.top}>
								<img className={styles.photo} src={blog.authorPhoto} alt={blog.author} />
								<div className={styles.context}>
									<span className={styles.name}>{blog.author}</span>
									<div className={styles.subtitile}>Красота и здоровье</div>
								</div>
							</div>
								<p className={styles.authorText}>{blog.authorText}</p>
								<div className={styles.btm}>
									<span className={styles.name}>Поделитесь нами в:</span>
									<SocialIconsFoot variant='blog'/>
								</div>						
						</div>
						<div className={styles.texts}>
							<p className={styles.text}>{blog.text}</p>
							<p className={styles.text}>{blog.text1}</p>
							<p className={styles.text}>{blog.text2}</p>
							<p className={styles.text}>{blog.text3}</p>
							<p className={styles.text}>{blog.text4}</p>
							<p className={styles.text}>{blog.text5}</p>
							<p className={styles.text}>{blog.text6}</p>
						</div>
					</div>		
				</div>
			</div>
		</div>
	)
}

export default BlogSinglePage