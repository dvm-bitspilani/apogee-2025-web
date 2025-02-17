import React from "react";
import styles from "./contactcard.module.scss";
import poster from "../../../src/assets/contact-poster.png";

const ContactCard = ({
  name,
  dept1,
  dept2,
  personImg,
  phone = null,
  email = null,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={poster} alt="poster background image" />
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
              strokeWidth="0.690498"
            />
            <path
              d="M3.10352 29.1028V8.09726C5.06911 8.17941 9.37219 7.11149 9.37219 2.18263H203.216M277.46 29.1028V8.09726C275.494 8.17941 271.563 7.11149 271.563 2.18263H79.9506M3.10352 9.3735V30.3791C5.06911 30.2969 9.37219 31.3648 9.37219 36.2937H203.216M277.46 9.3735V30.3791C275.494 30.2969 271.563 31.3648 271.563 36.2937H79.9506"
              stroke="#535353"
              strokeWidth="0.690498"
            />
          </svg>
          <div className={styles.text}>{name}</div>
        </div>
        <div className={styles.pic}>
          <img src={personImg} alt="costaan image" />
        </div>
        <div className={styles.dept}>
          <p>{dept1}</p>
          <p>{dept2}</p>
        </div>
        <div className={styles.contact}>
          <a
            style={
              email
                ? {}
                : phone
                ? { display: "none" }
                : { opacity: 0, pointerEvents: "none" }
            }
            href={`mailto:${email}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
            >
              <g clipPath="url(#clip0_895_2185)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6049 17.553L15.9879 20.5498L20.2129 17.6351L29.6837 26.9788C29.4343 27.0593 29.168 27.1027 28.8907 27.1027H3.07885C2.73812 27.1027 2.41288 27.0361 2.11396 26.9169L11.6049 17.553ZM31.4725 9.87414V24.5209C31.4725 24.9035 31.3889 25.2659 31.2402 25.5927L21.9569 16.4332L31.4725 9.87414ZM0.497041 9.95623L9.85474 16.3558L0.661211 25.4285C0.552326 25.1383 0.496711 24.8308 0.497041 24.5209V9.95623ZM28.8907 3.87109C30.3156 3.87109 31.4725 5.02648 31.4725 6.4529V7.36048L15.9817 18.0393L0.497041 7.44876V6.4529C0.497041 5.02803 1.65243 3.87109 3.07885 3.87109H28.8907Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_895_2185">
                  <rect
                    width="30.9755"
                    height="30.9755"
                    fill="white"
                    transform="translate(0.498047 -0.000976562)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            style={
              phone
                ? {}
                : email
                ? { display: "none" }
                : { opacity: 0, pointerEvents: "none" }
            }
            href={`tel:${phone}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M22.9645 18.0541L22.3427 18.6732C22.3427 18.6732 20.8627 20.1436 16.8245 16.1286C12.7863 12.1137 14.2663 10.6432 14.2663 10.6432L14.6571 10.2524C15.6233 9.29308 15.7148 7.75159 14.8717 6.62554L13.1498 4.32561C12.1057 2.93171 10.09 2.74723 8.8943 3.93614L6.74879 6.06798C6.15707 6.65834 5.76076 7.42088 5.80859 8.26815C5.93158 10.4369 6.91278 15.101 12.3845 20.5426C18.1883 26.3123 23.6341 26.5419 25.8602 26.3341C26.5654 26.2686 27.1776 25.9105 27.6709 25.4186L29.6114 23.489C30.9233 22.1866 30.5544 19.9523 28.8762 19.0408L26.2661 17.6209C25.1646 17.0224 23.8254 17.1987 22.9645 18.0541Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
