import React from "react";
import { Link } from "react-router";
import styles from "./backbutton.module.scss";
import backbtn from "../../../src/assets/Register/backbtn.png";

export default function BackButton() {
  return (
    <Link to={"/"}>
      <div className={styles.backBtn}>
        <img src={backbtn} alt="backbtn"></img>
      </div>
    </Link>
  );
}
