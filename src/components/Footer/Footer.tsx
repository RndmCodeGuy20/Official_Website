import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
      <footer className={styles["footer"]}>
          <div className={styles["footer_container"]}>
              <div className={styles["footer_1"]}>
                  <a href="index.html"
                      className={styles["footer_logo"]}>
                      <img src={logo}
                          width="75%"
                          alt=""/>
                  </a>
              </div>

              <div className={styles["footer_2"]}>
                <h4>All Links</h4>
                  <ul className={styles["permalinks"]}>
                      <li><a href="/">Home</a></li>
                      <li><a href="/#about">About</a></li>
                      <li><a href="/team">Team</a></li>
                  </ul>
              </div>
              <div className={styles["footer_2"]}>
                    <h4>Events</h4>
                  <ul className={styles["permalinks"]}>
                      <li><a href="">All Events</a></li>
                      <li><a href="">Upcoming</a></li>
                      <li><a href="">Recruitment</a></li>
                  </ul>
              </div>

              <div className={styles["footer_4"]}>
                  <h4>Contact Us</h4>
                  <ul >
                      <li>+91 xxx xxxx xxx</li>
                      <li>rac.club@rknec.edu</li>
                  </ul>
                  {/* <ul className={styles["footer_socials"]}>
                      <li><a href="#"><i className="uil uil-facebook-f"></i></a></li>
                      <li><a href="#"><i className="uil uil-instagram-alt"></i></a></li>
                      <li><a href="#"><i className="uil uil-twitter"></i></a></li>
                      <li><a href="#"><i className="uil uil-linkedin-alt"></i></a></li>
                  </ul> */}
              </div>

          </div>
          <div className={styles["footer_copyright"]}>
              <small>All rights owned and reserved by <span>Robotics X Aviation Club</span>.
              </small>
          </div>
      </footer>
  )
}

export default Footer