import React from 'react'
import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.wrapper}>
        <div className={styles.logo_container}>
          <div className={styles.logo}></div>My Company</div>
        <div className={styles.navbar}>
          <ul>
            <li><a href='#menu1'>Menu1</a></li>
            <li><a href='#menu2'>Menu2</a></li>
            <li><a href='#menu3'>Menu3</a></li>
            <li><button>Login</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header