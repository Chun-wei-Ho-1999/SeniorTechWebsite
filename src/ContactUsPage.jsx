import React from 'react'

import styles, {layout} from './style'
import {Navbar, Footer} from './components'

const ContactUsPage = () => {
    return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Contact Us (Working in Progress)</h2>
        </div>
      </section>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
    )
}

export default ContactUsPage