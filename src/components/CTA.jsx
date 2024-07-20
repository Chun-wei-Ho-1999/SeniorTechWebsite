import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.background} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We invite you to collaborate with us in incorporating our cutting-edge AI software into your hardware, aiming to simplify the user experience by removing gel application and reducing skin irritation from adhesive sheets/medical tapes. This innovation will significantly expand your market presence
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button title='Contact Us' link='/ContactUs'/>
      </div>
    </section>
  )
}

export default CTA
