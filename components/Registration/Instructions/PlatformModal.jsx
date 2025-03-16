import React from "react";
import styles from "./platformModal.module.scss";
import regWrapper from "../../../src/assets/Register/regWrapper.png";

const PlatformModal = ({ os }) => {
  const handleClick = () => {
    window.location.href = "intent:https://bits-apogee.org#Intent;end";
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.message}>Embedded Browser Detected</p>
        <p className={styles.reason}>
          Due to security reasons, Google does not allow authentication on
          embedded browsers.
          <br />
          <span>
            Please open the website in your default browser to register
          </span>
        </p>
        {os === "Android" ? (
          <div className={styles.dashboardButton} onClick={handleClick}>
            Open in External Browser
          </div>
        ) : null}
        <img
          className={styles.modalBg}
          src={regWrapper}
          alt="registration wrapper"
        />
      </div>
    </div>
  );
};

export default PlatformModal;
