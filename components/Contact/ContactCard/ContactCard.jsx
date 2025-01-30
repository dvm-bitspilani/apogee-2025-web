import React from "react";
import styles from "./contactcard.module.scss";
import poster from "../../../src/assets/contact-poster.png";

const ContactCard = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={poster} alt="" />
        <div className={styles.name}>
          <svg
            width="281"
            height="39"
            viewBox="0 0 281 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.textFrame}
          >
            <path
              d="M0.5 30.1641V6.92226C2.63462 7.01147 6.90385 5.85172 6.90385 0.499023H207.544M279.693 30.1641V6.92226C277.558 7.01147 273.289 5.85172 273.289 0.499023H72.6485M0.5 8.31113V31.553C2.63462 31.4637 6.90385 32.6235 6.90385 37.9762H207.544M279.693 8.31113V31.553C277.558 31.4637 273.289 32.6235 273.289 37.9762H72.6485"
              stroke="black"
              stroke-width="0.690498"
            />
            <path
              d="M3.10352 29.1028V8.09726C5.06911 8.17941 9.37219 7.11149 9.37219 2.18263H203.216M277.46 29.1028V8.09726C275.494 8.17941 271.563 7.11149 271.563 2.18263H79.9506M3.10352 9.3735V30.3791C5.06911 30.2969 9.37219 31.3648 9.37219 36.2937H203.216M277.46 9.3735V30.3791C275.494 30.2969 271.563 31.3648 271.563 36.2937H79.9506"
              stroke="#535353"
              stroke-width="0.690498"
            />
          </svg>
          <div className={styles.text}>pratham sonawane</div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
