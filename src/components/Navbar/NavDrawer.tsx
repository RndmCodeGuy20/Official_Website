import { useState } from 'react'
import styles from './NavDrawer.module.css'

interface PROPS {
  showMenu: boolean,
  setshowMenu: (showMenu: boolean) => void
}

const NavDrawer = (props) => {

  return (
    <div className={styles.drawer}>

    </div>
  )
}

export default NavDrawer