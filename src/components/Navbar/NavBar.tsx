import styles from './NavBar.module.css'
import RAC_LOGO from '../../assets/logo.png'
import drawer from '../../assets/nav/drawer.svg'
import { useState } from 'react'
import NavDrawer from './NavDrawer'

const NavBar = () => {  

    const [showMenu, setshowMenu] = useState(true)


  return (
      <nav>
          <div id="navDiv" className={`${styles.nav} flex items-center`} style={{ width: "100%"}} >
              <div className={styles.drawer} onClick={
               () => setshowMenu(!showMenu) 
              } >
                <img src={drawer} width={40} alt="" />
              </div>
              <div>
                  <a href="#home">
                      <img 
                          src={RAC_LOGO}
                          alt=""/>
                  </a>
              </div>
              { showMenu && <div className={styles["nav_drawer"]}>
                  <NavDrawer showMenu={showMenu} setshowMenu={setshowMenu} />
              </div>}
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