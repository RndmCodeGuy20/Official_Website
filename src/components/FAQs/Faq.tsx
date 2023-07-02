import { useState } from 'react'
import plus from '../../assets/faq/plus.svg'
import styles from './Faqs.module.css'


type FAQ = {
  que: string,
  ans: string
}

interface Props {
  faq: FAQ
}

const Faq = (props: Props) => {
  const faq = props.faq
  const [showAns, setshowAns] = useState(false)


  const clickHandler = () => {
    setshowAns(!showAns)
   
  }
    
  return (
    <article 
    data-aos="zoom-in" 
    data-aos-delay="100" 
    onClick={clickHandler}
    className={styles["faq"]}>
      <div className={styles["faq_icon"]}>
        <img src={plus} alt="answer for the faq" />  
      </div>
      <div className={styles["question_answer"]}>
        <h4>What do you understand by the term, the robotics?</h4>
        <p style={{ display: showAns ? 'block' : 'none'}} >The robotics is a combined branch of engineering and science which deals with the study of
          development,
          operation, and control of intelligent robots. The robotics is a part of Artificial intelligence.</p>
      </div>
    </article>
  )
}

export default Faq