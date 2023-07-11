import React from 'react'
import styles from './DomainCard.module.css'


const DomainCard = (props) => {
  return (
    <div className={styles["card"]}>
        <h2 className={styles["card-title"]}>
            Awesome
        </h2>
        <p className={styles["card-body"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis facilis ullam animi? Perspiciatis assumenda quia dolorum consectetur atque temporibus ex officia porro odit eligendi ratione, at expedita quis exercitationem sint.
        </p>
        <a href="#" className="button">
            Learn More
        </a>
    </div>
  )
}

export default DomainCard