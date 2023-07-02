import styles from './NavBar.module.css'
import RAC_LOGO from '../../assets/logo.png'

const NavBar = () => {  
  return (
      <nav>
          <div id="navDiv" className={`${styles.nav} flex justify-between items-center`} style={{ width: "100%"}} >
              <div id="progress" className={styles["progress"]} >

              </div>
              <h1>
                  <a href="#home">
                      <img 
                          src={RAC_LOGO}
                          width="200"
                          height="100%"
                          alt=""/>
                  </a>
              </h1>
              <ul className={styles["nav_menu"]}>
                  <li><a href="/#">Home</a></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/team">Team</a></li>
                  <li><a href="/#achievements">Achievements</a></li>
                  <li><a href="/#faqs">FAQs</a></li>
              </ul>
          </div>
      </nav>
  )
}

export default NavBar