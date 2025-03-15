import React, { useEffect, useRef, useState } from "react";
import styles from "../components/Quantaculus/Quantaculus.module.scss";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import OverlayBackBtn from "../components/Overlay/OverlayBackBtn/OverlayBackBtn";

const QuantaculusSubmitted = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // setErrorMessage('');
  };

  const handleLoginError = (error) => {
    setIsLoggedIn(false);
    // setErrorMessage(error);
  };

  const handleQuizOpen = () => {
    setIsQuizOpen(true);
  };

  // console.log(isLoggedIn)


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
        className={styles.pageContainer}
      >
        {/* <div className={styles.pageWrapper}>
          <div className={styles.homeBtn} onClick={handleHomeClick}>
            <span>Home</span>
          </div>
        </div> */}
        <div className={styles.backBtn} onClick={handleHomeClick}>
          <OverlayBackBtn />
        </div>
        <div className={styles.submittedBox}>
          <p className={styles.submitted}>Submitted Successfully!</p>
        </div>

      </motion.div>
    </>
  );
};

export default QuantaculusSubmitted;