import React from "react";
import { Link } from "react-router";
import styles from "./backbutton.module.scss";
import backbtn from "../../../src/assets/Register/backbtn.png";
import mobilebackbtn from "../../../src/assets/Register/mobilebackbtn.png";

export default function BackButton() {
  return (
    <Link to={"/"}>
      <div className={styles.backBtn}>
        <img src={backbtn} alt="backbtn"></img>
      </div>
      <div className={styles.mobilebackBtn}>
        <img src={mobilebackbtn} alt="mobilebackbtn"></img>
      </div>
    </Link>
  );
}
