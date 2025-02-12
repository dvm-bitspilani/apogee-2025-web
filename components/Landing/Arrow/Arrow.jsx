import React from "react";
import styles from "./arrow.module.scss";
import { Html } from "@react-three/drei";

const Arrow = ({ position = [0, 0, 0] }) => {
  console.log("hello");
  return (
    <Html position={position} center>
      <div className={styles.arrows}>
        <img
          src="../../public/images/arrow.svg"
          alt="first arrow"
          className={styles.first}
        />
        <img
          src="../../public/images/arrow.svg"
          alt="second arrow"
          className={styles.second}
        />
        <img
          src="../../public/images/arrow.svg"
          alt="third arrow"
          className={styles.third}
        />
      </div>
    </Html>
  );
};

export default Arrow;
