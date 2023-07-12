import React, { useState } from 'react'
import styles from './DomainCard.module.css'

interface PROPS { 
  domain: DOMAIN
}

type DOMAIN = {
  id : number,
  name: string,
  shortdesc: string,
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
  
    }}>
      <h2>{domain.name}</h2>
      <p>{domain.description}</p>
      <div 
        style={{ 
          width: "100%"
        }}
      >
        <a href="#">Join</a> 
      </div>
    </div>
  </div>
  )
}

export default DomainCard