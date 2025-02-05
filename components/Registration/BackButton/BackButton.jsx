import React from "react";
import { Link } from "react-router";
import styles from "./backbutton.module.scss";
import backbtn from "../../../src/assets/Register/backbtn.png";
import mobilebackbtn from "../../../src/assets/Register/mobilebackbtn.png";

export default function BackButton() {
  return (
    // <Link to={"/"}>
    <a
      href="http://localhost:5173/"
      // href="https://apogee2025.netlify.app/"
      // href="https://bits-apogee.org/"
    >
      <div className={styles.backBtn}>
        <img src={backbtn} alt="backbtn"></img>
      </div>
      <div className={styles.mobilebackBtn}>
        <img src={mobilebackbtn} alt="mobilebackbtn"></img>
      </div>
    </a>
    // </Link>
  );
}
