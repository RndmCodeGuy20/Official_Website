import React, { useState} from 'react'
import styles from '../../components/DomainCard/DomainCard.module.css'
import { domainData } from './domainData'
import DomainCard from '../../components/DomainCard/DomainCard'

const Domains = () => {
  const [allDomains, setallDomains] = useState([...domainData])
  return (
        <section id="particlesJS" className={styles["domainMain"]}>
            <header data-aos="fade-in">
                <h2>RAC Club Domains</h2>
            </header>
            <div className={styles["allDomain"]}>
                {
                  allDomains.map((domain) => {
                    return(
                      <DomainCard domain={domain} />
                    )
                  })
            } 
            </div>
        </section>
  )
}

export default Domains