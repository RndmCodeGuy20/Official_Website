import { useState } from 'react'
import close from '../../assets/nav/close.png'
import styles from './NavDrawer.module.css'

interface PROPS {
  showMenu: boolean,
  setshowMenu: (showMenu: boolean) => void
}

const NavDrawer = (props:PROPS) => {

  return (
    <ul className={styles.drawer}>
        <div className={styles.close} onClick={() => {
          props.setshowMenu(!props.showMenu)
        }} >
          <img src={close} width={25} alt="close menu button" />
        </div>
        <li onClick={() => {props.setshowMenu(false)}}><a href="/#">Home</a></li>
        <li onClick={() => {props.setshowMenu(false)}}><a href="/#about">About</a></li>
        <li onClick={() => {props.setshowMenu(false)}}><a href="/domains">Domains</a></li>
        <li onClick={() => {props.setshowMenu(false)}} ><a href="/team">Team</a></li>
        <li onClick={() => {props.setshowMenu(false)}}><a href="/#achievements">Achievements</a></li>
        <li onClick={() => {props.setshowMenu(false)}}><a href="/#faqs">FAQs</a></li>
    </ul>
  )
}

export default NavDrawer