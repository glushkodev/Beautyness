import { useState, useRef } from 'react'
import styles from './Form.module.css'
import User from '../../../../../../assets/user_ico.svg?react'
import Mail from '../../../../../../assets/mail_ico.svg?react'
import Phone from '../../../../../../assets/phone_ico.svg?react'
import Book from '../../../../../../assets/book_ico.svg?react'
import Edit from '../../../../../../assets/edit_ico.svg?react'

const Form = () => {
  const [submitted, setSubmitted] = useState(false) 
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [serviceError, setServiceError] = useState(false)
  const phoneInput = useRef(null)
  const nameInput = useRef(null)
  const emailInput = useRef(null)
  const serviceInput = useRef(null)

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = (e) => {
    e.preventDefault() 
    let isValid = true
    const digits = phone.replace(/\D/g, '')
    const emailValue = emailInput.current?.value.trim()
    if (digits.length !== 12) {
      setPhoneError(true)
      isValid = false
    }
    if (!nameInput.current?.value.trim()) {
      setNameError(true)
      isValid = false
    }
    if (!emailValue || !isValidEmail(emailValue)) {
      setEmailError(true)
      isValid = false
    }
    if (!serviceInput.current?.value.trim()) {
      setServiceError(true)
      isValid = false
    }
    if (!isValid) return

    setPhoneError(false)
    setNameError(false)
    setEmailError(false)
    setServiceError(false)
    setSubmitted(true)
    e.target.reset()
    setPhone('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handlePhoneFocus = () => {
    if (!phone) {
      setPhone('+375 ()')
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
    setPhoneError(false)
  }

  const handleNameChange = () => {
    setNameError(false)
  };

  const handleEmailChange = () => {
    setEmailError(false)
  };

  const handleServiceChange = () => {
    setServiceError(false)
  };

  return (
    <section className={styles.forma}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.subhead}>Запланируйте свое присутствие</h3>
          <h2 className={styles.title}>Записаться на прием</h2>
          <p className={styles.text}>Существует множество вариантов отрывков Lorem Ipsum, но большинство из них подверглись изменениям в той или иной форме.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              {nameError && <span className={styles.errorText}>Введите имя</span>}
              <div className={styles.input}>
                <User className={styles.icon} />
                <input
                  type="text"
                  placeholder="Имя"
                  ref={nameInput}
                  onChange={handleNameChange}
                  className={nameError ? styles.inputError : ''}
                />
              </div>
               
            </div>
            <div className={styles.inputWrapper}>
              {emailError && <span className={styles.errorText}>Введите Email</span>}
              <div className={styles.input}>
                <Mail className={styles.icon} />
                <input 
                  type="email" 
                  placeholder="Email" 
                  ref={emailInput}
                  onChange={handleEmailChange}
                  className={emailError ? styles.inputError : ''}
                  />
              </div>
            </div>

            <div className={styles.inputWrapper}>
              {phoneError && (<span className={styles.errorText}>Введите корректный номер в формате +375 (XX) XXX-XX-XX</span>)}
              <div className={styles.input}>
                <Phone className={styles.icon} />
                <input
                  type="tel"
                  ref={phoneInput}
                  value={phone}
                  onFocus={handlePhoneFocus}
                  onChange={handlePhoneChange}
                  placeholder="Телефон"
                  className={phoneError ? styles.inputError : ''}
                />
              </div>
            </div>

            <div className={styles.inputWrapper}>
              {serviceError && <span className={styles.errorText}>Введите услугу</span>}
              <div className={styles.input}>
                <Book className={styles.icon} />
                <input 
                  type="text" 
                  placeholder="Необходимая вам услуга" 
                  ref={serviceInput}
                  onChange={handleServiceChange}
                  className={serviceError ? styles.inputError : ''}
                  />
              </div>
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

export default Form