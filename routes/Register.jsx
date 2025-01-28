import React, { useState } from "react";
import Instructions from "../components/Registration/Instructions/Instruction";
import styles from "./register.module.scss";

export default function Register() {

  return (
    <>
      <div className={styles.registerContainer}>
          <Instructions />
      </div>
    </>
  );
}
