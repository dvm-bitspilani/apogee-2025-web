import React, { useState, useEffect } from "react";
import styles from "./countdown.module.scss";

const MAX_DIGITS = 6;
// Target Unix timestamp (in seconds)
const targetTimestamp = 1743359400;

const Countdown = () => {
  // Initialize digits as an array of strings ("0")
  const [digits, setDigits] = useState(Array(MAX_DIGITS).fill("0"));
  const [activeOpacity, setActiveOpacity] = useState(1);

  useEffect(() => {
    const targetTimeMs = targetTimestamp * 1000;

    const updateCountdown = () => {
      const now = Date.now();
      let diff = targetTimeMs - now;
      if (diff < 0) {
        diff = 0;
      }

      // Calculate remaining time in days, hours, and minutes
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const remainderAfterDays = diff % (1000 * 60 * 60 * 24);
      const hours = Math.floor(remainderAfterDays / (1000 * 60 * 60));
      const remainderAfterHours = remainderAfterDays % (1000 * 60 * 60);
      const minutes = Math.floor(remainderAfterHours / (1000 * 60));

      // Convert each value to a two-digit string (pad with zero if needed)
      const dayString = days.toString().padStart(2, "0");
      const hourString = hours.toString().padStart(2, "0");
      const minuteString = minutes.toString().padStart(2, "0");

      // Combine all digits into one array (e.g., ["0", "1", "1", "2", "3", "4"])
      const newDigits = [
        ...dayString.split(""),
        ...hourString.split(""),
        ...minuteString.split(""),
      ];
      setDigits(newDigits);
      setActiveOpacity(1); // Always fully visible in this countdown
    };

    // Update the countdown once per second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Days Group */}
      <div className={styles.timeContainer}>
        <div className={styles.group}>
          <div className={styles.digits}>
            {digits.slice(0, 2).map((digit, index) => (
              <span
                key={index}
                className={styles.number}
                style={{ opacity: activeOpacity }}
              >
                {digit}
              </span>
            ))}
          </div>
        </div>
        <span className={styles.colon}>:</span>
        {/* Hours Group */}
        <div className={styles.group}>
          <div className={styles.digits}>
            {digits.slice(2, 4).map((digit, index) => (
              <span
                key={index + 2}
                className={styles.number}
                style={{ opacity: activeOpacity }}
              >
                {digit}
              </span>
            ))}
          </div>
        </div>
        <span className={styles.colon}>:</span>
        {/* Minutes Group */}
        <div className={styles.group}>
          <div className={styles.digits}>
            {digits.slice(4, 6).map((digit, index) => (
              <span
                key={index + 4}
                className={styles.number}
                style={{ opacity: activeOpacity }}
              >
                {digit}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Labels placed below the digits row */}
      <div className={styles.labelsRow}>
        <div className={styles.label}>DAYS</div>
        <div className={styles.label}>HOURS</div>
        <div className={styles.label}>MINS</div>
      </div>
    </div>
  );
};

export default Countdown;
