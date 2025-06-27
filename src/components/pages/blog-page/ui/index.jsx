import styles from './index.module.css'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import BlogImg1 from '../../../../assets/blog_img.png'
import BlogImg2 from '../../../../assets/blog_img2.png'
import BlogImg3 from '../../../../assets/blog_img3.png'
import BlogImg4 from '../../../../assets/blog_img4.png'
import BlogImg5 from '../../../../assets/blog_img5.png'
import BlogImg6 from '../../../../assets/blog_img6.png'

const BlogPage = () => {
	return (
		<div className={styles.blog}>
			<PageHeader 
				subtitle="Свяжитесь с нами"
				title="Статьи и новости"
			/>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.items}>
            <div className={styles.item}>
							<div className={styles.wrapper}>
								<img className={styles.img} src={BlogImg1} alt="Blog Image" />
							</div>
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
							<div className={styles.wrapper}>
								<img className={styles.img} src={BlogImg2} alt="Blog Image" />
							</div>
              <div className={styles.btm}>
                <div className={styles.subtopic}>
                  <span className={styles.date}>19 июня 2025</span>
                  <span className={styles.author}>Артем Волков</span>
                </div>
                <h3 className={styles.topic}>Советы по улучшению тела с помощью очищения</h3>
                <p className={styles.text}>Смысл использования Lorem Ipsum в том, что придание ему читабельного вида приведет к концу.</p>
              </div>
            </div>
            <div className={styles.item}>
							<div className={styles.wrapper}>
								<img className={styles.img} src={BlogImg3} alt="Blog Image" />
							</div>
              <div className={styles.btm}>
                <div className={styles.subtopic}>
                  <span className={styles.date}>11 июня 2025</span>
                  <span className={styles.author}>Павел Громов</span>
                </div>
                <h3 className={styles.topic}>Ощутите красоту в нашем салоне</h3>
                <p className={styles.text}>Смысл использования Lorem Ipsum в том, что придание ему читабельного вида приведет к концу.</p>
              </div>
            </div>
						<div className={styles.item}>
							<div className={styles.wrapper}>
								<img className={styles.img} src={BlogImg4} alt="Blog Image" />
							</div>
              <div className={styles.btm}>
                <div className={styles.subtopic}>
                  <span className={styles.date}>7 июня 2025</span>
                  <span className={styles.author}>Таисия Мельникова</span>
                </div>
                <h3 className={styles.topic}>Лучшая и идеальная стратегия ухода за кожей</h3>
                <p className={styles.text}>Смысл использования Lorem Ipsum в том, что придание ему читабельного вида приведет к концу.</p>
              </div>
            </div>
						<div className={styles.item}>
							<div className={styles.wrapper}>
								<img className={styles.img} src={BlogImg5} alt="Blog Image" />
							</div>
              <div className={styles.btm}>
                <div className={styles.subtopic}>
                  <span className={styles.date}>5 июня 2025</span>
                  <span className={styles.author}>Артем Романов</span>
                </div>
                <h3 className={styles.topic}>Почувствовал естественный процесс обратного старения</h3>
                <p className={styles.text}>Смысл использования Lorem Ipsum в том, что придание ему читабельного вида приведет к концу.</p>
              </div>
            </div>
						<div className={styles.item}>
							<div className={styles.wrapper}>
								<img className={styles.img} src={BlogImg6} alt="Blog Image" />
							</div>
              <div className={styles.btm}>
                <div className={styles.subtopic}>
                  <span className={styles.date}>31 мая 2025</span>
                  <span className={styles.author}>Полина Макарова</span>
                </div>
                <h3 className={styles.topic}>Как сделать так, чтобы макияж держался долго</h3>
                <p className={styles.text}>Смысл использования Lorem Ipsum в том, что придание ему читабельного вида приведет к концу.</p>
              </div>
            </div>
          </div>  
				</div>
			</div>
		</div>
	)
}

export default BlogPage