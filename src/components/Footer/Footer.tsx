import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
      <section className={styles["footer"]}>
          <div className={styles["footer_container"]}>
              <div className={styles["footer_1"]}>
                  <a href="index.html"
                      className={styles["footer_logo"]}>
                      <img src="assets/logo.png"
                          width="250"
                          alt=""/>
                  </a>
              </div>

              <div className={styles["footer_2"]}>
                  <h4>All Links</h4>
                  <ul className="permalinks">
                      <li><a href="#">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="team.html">Team</a></li>
                      <li><a href="contact.html">Contact</a></li>
                  </ul>
              </div>

              <div className={styles["footer_3"]}>
                  <h4>Primary</h4>
                  <ul>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Refund Policy</a></li>
                  </ul>
              </div>

              <div className={styles["footer_4"]}>
                  <h4>Contact Us</h4>
                  <div>
                      <p>+91 xxx xxxx xxx</p>
                      <p>robionics@rknec.edu</p>
                  </div>
                  <ul className={styles["footer_socials"]}>
                      <li><a href="#"><i className="uil uil-facebook-f"></i></a></li>
                      <li><a href="#"><i className="uil uil-instagram-alt"></i></a></li>
                      <li><a href="#"><i className="uil uil-twitter"></i></a></li>
                      <li><a href="#"><i className="uil uil-linkedin-alt"></i></a></li>
                  </ul>
              </div>

          </div>
          <div className={styles["footer_copyright"]}>
              <small>All rights owned by Robioncis
              </small>
          </div>
      </section>
  )
}

export default Footer