import React, { useState, useEffect } from "react";
import RegForm from "../components/Registration/Form/RegForm";
import background from "../src/assets/Register/regBackground.png";
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
      <div
        style={{
          background: `radial-gradient(40.9% 58.96% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%), url(${background})`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
        }}
        className={styles.registerContainer}
      >
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
