import React, { useState, useEffect } from "react";
import RegForm from "../components/Registration/Form/RegForm";
import styles from "./register.module.scss";

export default function Register() {
  const [hasEmail, setHasEmail] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const email = localStorage.getItem("userEmail");
      if (email) {
        setHasEmail(true);
      } else {
        setHasEmail(false);
      }
    }, 1000);

    return () => clearTimeout(timeout); // Cleanup
  }, []);

  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.scrollContainer}>
          {hasEmail ? (
            <RegForm />
          ) : (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <p>Please wait while we load your registration form.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
