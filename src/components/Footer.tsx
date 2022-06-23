import React from 'react'
import styles from "./Footer.module.scss"



const Footer = () => {
  return (
    <footer className={styles.footer}>
       <h3> &copy; {new Date().getFullYear()}</h3>
       <a href="#">Lucas Silva</a>
     </footer>
  )
}



export default Footer;
