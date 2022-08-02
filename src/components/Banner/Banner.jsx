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
          <input type="search"></input>
          <button>SEARCH</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
