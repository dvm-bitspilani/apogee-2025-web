import React from "react";
import styles from "./contact.module.scss";
import heading from "../../src/assets/contact.png";
import ContactCard from "./ContactCard/ContactCard";
import { CoStAAnData } from "../../utils/data/data";

const Contact = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <img src={heading} alt="contact us heading" />
          <div className={styles.text}>contact us</div>
        </div>
        <div className={styles.container}>
          {CoStAAnData.map((costaa, index) => {
            return (
              <ContactCard
                personImg={`/images/contact/${costaa.personImg}.png`}
                name={costaa.name}
                dept={costaa.dept}
                phone={costaa.phone}
                email={costaa.email}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
