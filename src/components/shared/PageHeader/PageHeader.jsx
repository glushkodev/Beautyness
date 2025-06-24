import styles from './PageHeader.module.css'
import Bg from '../../../assets/pageheader_bg.png'

const PageHeader = ({ subtitle, title }) => {
  return (
    <section className={styles.pageHeader}>
      <img className={styles.bg} src={Bg} alt="Bg Image" />
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
      {title && <h1 className={styles.title}>{title}</h1>}
    </section>
  )
}

export default PageHeader