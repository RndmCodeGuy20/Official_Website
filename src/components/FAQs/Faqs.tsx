import React, { useState } from 'react'
import { faqDat } from './data'
import Faq from './Faq'
import styles from './Faqs.module.css'

const Faqs = () => {

    const [faqs, setfaqs] = useState([...faqDat])

  return (
      <section id="faqs" data-aos="zoom-in" className={styles["faqs"]}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles["faqs_container"]}>

             {
                faqs.map(faq => {
                    return(
                        <Faq faq={faq} />
                    )
                })
             }

          </div>
      </section>
  )
}

export default Faqs