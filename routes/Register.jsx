import React, { useState } from "react";
import Instructions from "../components/Registration/Instructions/Instruction";
import styles from "./register.module.scss";
import BackButton from "../components/Registration/BackButton/BackButton";

export default function Register() {

  return (
    <>
      <div className={styles.registerContainer}>
          <Instructions />
      </div>
      <div className={styles.backbtnContainer}>
        <BackButton />
      </div>
    </>
  );
}
