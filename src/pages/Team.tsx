import { useState } from 'react'
import styles from '../components/TeamCard/TeamCard.module.css'
import { teamData } from './teamdata.ts'
import TeamCard from '../components/TeamCard/TeamCard.tsx'

const Team = () => {
  const [allMembers, setallMembers] = useState([...teamData])

  return (
        <section id="particlesJS" className={styles["teamMain"]}>
            <header data-aos="fade-in">
                <h2>Club Members 2023</h2>
            </header>
            <div className={styles["allMembers"]}>
                {
                  allMembers.map((member) => {
                    return(
                      <TeamCard member={member} />
                    )
                  })
            } 
            </div>
        </section>
  )
}

export default Team