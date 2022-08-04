import React from "react";
import styles from "./banner.module.css";

function Banner() {
  return (
    <div className={styles.banner_container}>
      <div className={styles.wrapper}>
        <h1>
          Dream, build and <br></br>transform with Google Cloud
        </h1>
        <div className={styles.searchbox}>
          <input type="search" placeholder='Search products...'></input>
          <button><i className="fa-solid fa-magnifying-glass"></i> SEARCH</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
