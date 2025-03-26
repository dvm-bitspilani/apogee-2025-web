import React from "react";
import logo from "/images/logo.svg";
import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}
