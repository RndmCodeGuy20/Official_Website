import styles from './TeamCard.module.css'
import insta from '../../assets/socials/instagram.png'
import linkedin from '../../assets/socials/linkedin.png'
import github from '../../assets/socials/github.png'



type Member = {
    id: number,
    name : string,
    image : string,
    role : string,
    socials : {
        instagram : string,
        linkedin : string,
        twitter : string
    }
}
interface Props {
    member : Member
}
const TeamCard = (props:Props) => {
    const { name , image , role } = props.member
  return (
                <div data-aos="flip-up" data-aos-duration="1000" className={styles["card"]}>
                    <div className={styles["content"]}>
                        <div className={styles["imgBx"]}>
                            <img src={image }
                                alt=""/>
                        </div>
                        <div className={styles["contentBx"]}>
                            <h3>
                                {name || "Team Member"}<br/>
                                <span>
                                    {role || "Web Design"}
                                </span>
                            </h3>
                        </div>
                    </div>
                    <ul className={styles["sci"]}>
                        <li >
                            <a href="">
                                <img src={insta}
                                    aria-hidden="true"
                                    alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={linkedin}
                                    aria-hidden="true"
                                    alt=""/>
                            </a>
                        </li>
                        <li >
                            <a href="">
                                <img src={github}
                                    aria-hidden="true"
                                    alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
  )
}

export default TeamCard