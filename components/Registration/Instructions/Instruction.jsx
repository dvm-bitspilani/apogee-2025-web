import React from "react";
import styles from "./instructions.module.scss";
import regWrapper from "../../../src/assets/Register/regWrapper.png";

export default function Instructions() {
  return (
    <>
      <div
        className={styles.mainOutWrapper}
        style={{
          background: `url(${regWrapper})`,
          boxShadow: "-12px -12px 15.34px 0px rgba(0, 0, 0, 0.32)",
        }}
      >
      </div>
    </>
  );
}
