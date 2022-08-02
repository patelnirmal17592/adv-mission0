import React from "react";
import styles from "./header.module.css";
import google_logo from "../../images/Google_logo.png";

function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.wrapper}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <img src={google_logo} alt="google logo"></img>
          </div>
          <h3>My Company</h3>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <a href="#menu1">Menu1</a>
            </li>
            <li>
              <a href="#menu2">Menu2</a>
            </li>
            <li>
              <a href="#menu3">Menu3</a>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
