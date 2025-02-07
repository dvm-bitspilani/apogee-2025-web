import React, { useEffect } from "react";
import styles from "./modal.module.scss";
import regWrapper from "../../../src/assets/Register/regWrapper.png";
import modalButton from "../../../src/assets/Register/modalButton.png";

const RegistrationModal = ({ message, isOpen, onClose, type, handleClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.message}>
          {type === "Success"
            ? "Registration Succesful"
            : `Registration Failed`}
        </p>
        {type === "Success" ? "" : <p className={styles.reason}>{message}</p>}
        <div
          className={styles.dashboardButton}
          onClick={type === "Success" ? () => handleClick() : onClose}
        >
          {type === "Success" ? "DashBoard" : "OK"}
          <img className={styles.buttonBg} src={modalButton} />
        </div>
        <img className={styles.modalBg} src={regWrapper} />
      </div>
    </div>
  );
};

export default RegistrationModal;
