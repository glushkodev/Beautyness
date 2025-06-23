import { useState, useRef } from 'react'
import styles from './Discount.module.css'
import Dots from '../../../../../../assets/dots_ico.svg?react'
import Percent from '../../../../../../assets/percent_ico.svg?react'
import User from '../../../../../../assets/user_ico.svg?react'
import Mail from '../../../../../../assets/mail_ico.svg?react'
import Phone from '../../../../../../assets/phone_ico.svg?react'
import Book from '../../../../../../assets/book_ico.svg?react'
import Edit from '../../../../../../assets/edit_ico.svg?react'

const Discount = () => {
  const [submitted, setSubmitted] = useState(false) 
  const [phone, setPhone] = useState('')
  const phoneInput = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault() 
    setSubmitted(true)
    e.target.reset()
    setPhone('');
    setTimeout(() => {
      setSubmitted(false)
    }, 5000);
  }

   const handlePhoneFocus = () => {
    if (!phone) {
      setPhone('+375 ()');
      setTimeout(() => {
        const input = phoneInput.current
        if (input) input.setSelectionRange(6, 6)
      }, 0)
    }
  }

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '')

    let formatted = '+375 ('
    if (rawValue.length > 3) formatted += rawValue.substring(3, 5)
    if (rawValue.length >= 5) formatted += ') '
    if (rawValue.length >= 6) formatted += rawValue.substring(5, 8)
    if (rawValue.length >= 8) formatted += '-' + rawValue.substring(8, 10)
    if (rawValue.length >= 10) formatted += '-' + rawValue.substring(10, 12)

    setPhone(formatted)
  }

  return (
    <section className={styles.discount}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.subhead}>Фиксированная скидка</h3>
            <h2 className={styles.title}>Получите скидку до 50% на самые популярные услуги...</h2>
            <p className={styles.text}>Существует множество вариантов отрывков Lorem Ipsum, но большинство из них подверглись изменениям в той или иной форме, в частности из-за добавления юмора или случайных слов.</p>
            <div className={styles.banner}>
              <div className={styles.contact}>
                <div className={styles.item}>
                  <Dots className={styles.dots} />
                  <div className={styles.contacts} >
                    <span className={styles.label}>Пишите нам :</span>
                    <a className={styles.link} href="mailto:support@beauty.com">support@beauty.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <Dots className={styles.dots} />
                  <div className={styles.contacts} >
                    <span className={styles.label}>Звоните нам :</span>
                    <a className={styles.link} href="tel:+3754412345678">+375 (44) 123-456-7</a>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <span className={styles.get}>– Получите –</span>
                <Percent className={styles.percent} />
                <span className={styles.discountText}>Скидку</span>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <User className={styles.icon} />
              <input type="text" placeholder="Имя" required minLength="2" maxLength="30" />
            </div>
            <div className={styles.input}>
              <Mail className={styles.icon} />
              <input type="email" placeholder="Email" required />
            </div>
            <div className={styles.input}>
              <Phone className={styles.icon} />
              <input
                type="tel"
                ref={phoneInput}
                value={phone}
                onFocus={handlePhoneFocus}
                onChange={handlePhoneChange}
                placeholder="Телефон"
                required
              />
            </div>
            <div className={styles.input}>
              <Book className={styles.icon} />
              <input type="text" placeholder="Необходимая вам услуга" required />
            </div>
            <div className={styles.input}>
              <Edit className={styles.icon} />
              <textarea placeholder="Любая заметка для нас" rows="3" />
            </div>
            <button
              type="submit"
              className={`${styles.btn} ${submitted ? styles.submitted : ''}`}
              disabled={submitted}
            >
              {submitted ? 'Данные отправлены' : 'Записаться'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Discount