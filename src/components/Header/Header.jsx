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
          <h3>Google Cloud</h3>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <a href="#menu1">Why Google</a>
            </li>
            <li>
              <a href="#menu2">Products</a>
            </li>
            <li>
              <a href="#menu3">Contact us</a>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
          <div className={styles.menu}>☰</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
