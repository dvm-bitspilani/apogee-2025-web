import React from "react";
import { Html } from "@react-three/drei";
import styles from "./contact.module.scss";
import heading from "../../src/assets/contact.png";
import ContactCard from "./ContactCard/ContactCard";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      {/* <h1>Contact Us</h1> */}
      <div className={styles.heading}>
        <img src={heading} alt="" />
        <div className={styles.text}>contact us</div>
      </div>
      <div className={styles.container}>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;
