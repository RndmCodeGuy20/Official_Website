import React from "react";
import styles from "./WhatWeDo.module.css";
import plane from "../../assets/todo/plane.jpg";

const WhatWeDo = () => {
  return (
    <>
      <header data-aos="slide-up" className={styles["header"]}>
        <h2>What we do?</h2>
      </header>
      <section id="f0" className={styles["f0"]}>
        <header>
          Robotics & Aviation Club
        </header>
        <div className={styles["newcontainer"]}>
          <div className={styles["carousel"]}>
            <div className={`${styles["newimage"]} pointer`}>
              <span
                className={styles["carousel-span"]}
                style={{ backgroundSize: "cover" }}
              >
                Planes
              </span>
            </div>
            <div className={`${styles["newimage"]} ${styles["pointer"]}`}>
              <span className={styles["carousel-span"]}></span>
            </div>

            <div className={`${styles["newimage"]} ${styles["pointer"]}`}>
              <span className={styles["carousel-span"]}>Drone</span>
            </div>
            <div className={`${styles["newimage"]} ${styles["pointer"]}`}>
              <span className={styles["carousel-span"]}>Bots</span>
            </div>

            <div className={`${styles["newimage"]} ${styles["pointer"]}`}>
              <span className={styles["carousel-span"]}>Boats</span>
            </div>
            <div className={`${styles["newimage"]} ${styles["pointer"]}`}>
              <span className={styles["carousel-span"]}>Robots</span>
            </div>
            {/* <div className={`${styles["newimage"]} ${styles["pointer"]}`}>
              <span className={styles["carousel-span"]}>Robots</span>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
