import React, { useState } from 'react'
import styles from './DomainCard.module.css'

interface PROPS { 
  domain: DOMAIN
}

type DOMAIN = {
  id : number,
  name: string,
  description: string,
  responsibilities : [string], 
  technologies: [string], 
  status : string,
  isRecruting: boolean, 
  thumbnail: string, 
  form: string
}
const DomainCard = (props: PROPS) => {
  const [domain, setdomain] = useState(props.domain)
  return (
    <div className={styles["box"]}>
    <span></span>
    <div className={styles["content"]}  style={{ 
      backgroundImage : `url(${domain.thumbnail})`
    }}>
      <h2>{domain.name}</h2>
      <p>{domain.description}</p>
      <a href="#">Read More</a>
    </div>
  </div>
  )
}

export default DomainCard