import styles from './Benefits.module.css';
import Arrow from '../../../../../../assets/benefits_arrow.svg?react';
import Border from '../../../../../../assets/benefits_border.svg?react';

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subhead}>Наши потрясающие преимущества</h3>
          <h2 className={styles.title}>На самом деле, что вы получите</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.arrow}><Arrow className={styles.arrowico} /><Border className={styles.border} /></div>
              <div className={styles.subtitle}>Оптимизированная энергоэффективность</div>
              <div className={styles.subtext}>Смысл использования Lorem Ipsum в том, чтобы сделать его читабельным.</div>
            </div>
            <div className={styles.item}>
              <div className={styles.arrow}><Arrow className={styles.arrowico} /><Border className={styles.border} /></div>
              <div className={styles.subtitle}>Многогранная фильтрация воды</div>
              <div className={styles.subtext}>Смысл использования Lorem Ipsum в том, чтобы сделать его читабельным.</div>
            </div>
            <div className={styles.item}>
              <div className={styles.arrow}><Arrow className={styles.arrowico} /><Border className={styles.border} /></div>
              <div className={styles.subtitle}>Бескомпромиссное качество</div>
              <div className={styles.subtext}>Смысл использования Lorem Ipsum в том, чтобы сделать его читабельным.</div>
            </div>
            <div className={styles.item}>
              <div className={styles.arrow}><Arrow className={styles.arrowico} /><Border className={styles.border} /></div>
              <div className={styles.subtitle}>Расслабляющие спа-процедуры</div>
              <div className={styles.subtext}>Смысл использования Lorem Ipsum в том, чтобы сделать его читабельным.</div>
            </div>
            <div className={styles.item}>
              <div className={styles.arrow}><Arrow className={styles.arrowico} /><Border className={styles.border} /></div>
              <div className={styles.subtitle}>Легкий уход для лучшего удовольствия</div>
              <div className={styles.subtext}>Смысл использования Lorem Ipsum в том, чтобы сделать его читабельным.</div>
            </div>
            <div className={styles.item}>
              <div className={styles.arrow}><Arrow className={styles.arrowico} /><Border className={styles.border} /></div>
              <div className={styles.subtitle}>Оптимизированная энергоэффективность</div>
              <div className={styles.subtext}>Смысл использования Lorem Ipsum в том, чтобы сделать его читабельным.</div>
            </div>
          </div>        
        </div>
      </div>
    </section>
  )
}

export default Benefits