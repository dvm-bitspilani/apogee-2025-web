import React, { useEffect } from "react";
import styles from "./modal.module.scss";
import regWrapper from "../../../src/assets/Register/regWrapper.webp";
import modalButton from "../../../src/assets/Register/modalButton.webp";

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
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Demo registration result">
        <p className={styles.message}>
          {type === "Success"
            ? "Demo Complete"
            : `Registration Failed`}
        </p>
        <p className={styles.reason}>{message}</p>
        <button type="button"
          className={styles.dashboardButton}
          onClick={type === "Success" ? () => handleClick() : onClose}
        >
          {type === "Success" ? "BACK TO DEMO" : "OK"}
          <img
            className={styles.buttonBg}
            src={modalButton}
            alt="modal button background"
          />
        </button>
        <img
          className={styles.modalBg}
          src={regWrapper}
          alt="registration wrapper"
        />
      </div>
    </div>
  );
};

export default RegistrationModal;
