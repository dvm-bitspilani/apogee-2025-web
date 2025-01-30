import React from "react";
import { Html } from "@react-three/drei";
import styles from "./contact.module.scss";
import heading from "../../src/assets/contact.png";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      {/* <h1>Contact Us</h1> */}
      <div className={styles.heading}>
        <img src={heading} alt="" />
      </div>
    </div>
  );
};

export default Contact;
