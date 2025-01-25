import React, { useState } from "react";
import RegForm from "../components/Registration/Form/RegForm";
import background from "../src/assets/Register/regBackground.png";
import styles from "./register.module.scss";

export default function Register() {

  return (
    <>
      <div
        style={{
          background: `radial-gradient(40.9% 58.96% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%), url(${background})`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
        }}
        className={styles.registerContainer}
      >
        <div className={styles.scrollContainer}>
          <RegForm />
        </div>
      </div>
    </>
  );
}
