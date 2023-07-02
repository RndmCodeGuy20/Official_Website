import styles from './About.module.css'
import logo from "../../assets/logo.png"


const About = () => {
  return (
    <section id="about"
             className={`${styles["about"]} ${styles["newsection"]}`}>
        <header data-aos="fade-up"
                className="flex"
                style={{ padding: "0 0 0 10%"}}>
            <h2 data-aos="fade-up">What is Robionics ?
            </h2>

        </header>
        <div className={`${styles["aboutMain"]} flex items-center`}
             style={{ height: '75%'}}>
            <div data-aos="fade-right" className={`${"aboutLogo"} flex flex-center`} style={{width: "75%"}}>
                <img src={logo}
                     width="75%"
                     alt="" />
            </div>
            <div  data-aos="fade-right" data-aos-delay="100" className={`${styles["aboutDescription"]} flex flex-col gap`}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, architecto omnis nulla id molestias
                    odit nobis? Provident consectetur qui doloremque quibusdam laborum quas impedit vitae perspiciatis?
                    Veritatis neque animi omnis.</p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic dolor reprehenderit explicabo voluptas
                    sit eaque sequi ullam nostrum animi aliquid eum rerum, fuga cupiditate quis officia quia quasi nam
                    voluptate quod mollitia? Soluta est ducimus omnis illum inventore doloremque voluptates.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About