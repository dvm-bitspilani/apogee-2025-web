import styles from "./modal.module.scss";

const RegistrationModal = ({ message, isOpen, onClose, type = "success" }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`${styles.modal} ${
        type === "success" ? styles.success : styles.error
      }`}
    >
      <div className={styles.modalContent}>
        <span className={styles.modalClose} onClick={onClose}>
          &times;
        </span>
        <p className={styles.modalMessage}>{message}</p>
      </div>
    </div>
  );
};

export default RegistrationModal;
