import styles from './Main.module.css'


const Main = () => {
  return (
    <section id="home"
             className={styles["home"]}>
        <header>
            <p className={styles["homeTitleWord"]}>Robotics</p>
            <p className={`${styles["homeTitleWord"]} ${styles["biggerTitle"]}`}>X</p>
            <p className={styles["homeTitleWord"]}>Aviation</p>
        </header>
        <p data-aos="flip-right" className={styles["subheading"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, perferendis, veritatis corporis debitis
            beatae tenetur quaerat, soluta pariatu
        </p>
        <div className={`${styles["home_button"]} flex flex-center`}>
            <button data-aos="slide-up" className={`btn m-auto`}>
                Wanna Join Us
            </button>
        </div>
    </section>
  )
}

export default Main