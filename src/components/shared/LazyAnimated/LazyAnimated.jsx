import { Suspense } from 'react'
import styles from './LazyAnimated.module.css'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AnimatedWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const Spinner = () => <div className={styles.spinner}>Загрузка...</div>

const LazyAnimated = ({ component: Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} style={{ minHeight: '300px' }}>
      {inView ? (
        <Suspense fallback={<Spinner />}>
          <AnimatedWrapper>
            <Component />
          </AnimatedWrapper>
        </Suspense>
      ) : null}
    </div>
  );
};

export default LazyAnimated