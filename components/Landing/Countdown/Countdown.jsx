import React, { useState, useEffect, useRef } from "react";
import styles from "./countdown.module.scss";
import { useSelector } from "react-redux";

const MAX_DIGITS = 6;
const targetTimestamp = 1743172200;

const Countdown = () => {
  const [digits, setDigits] = useState(Array(MAX_DIGITS).fill("7"));
  const [opacities, setOpacities] = useState(Array(MAX_DIGITS).fill(1));
  const [phase, setPhase] = useState("waiting");

  const countdownIntervalRef = useRef(null);

  const curStage = useSelector((state) => state.experienceAnimations.curStage);
  const isPointerEventsAllowed = useSelector(
    (state) => state.experienceAnimations.isPointerEventsAllowed
  );

  useEffect(() => {
    if (curStage === "landing" && isPointerEventsAllowed) {
      setPhase("blinking");
    }
  }, [curStage, isPointerEventsAllowed]);

  useEffect(() => {
    if (phase !== "blinking") return;

    let cancelled = false;

    const runBlinkAnimation = async () => {
      const promises = digits.map(
        (_, i) =>
          new Promise((resolve) => {
            const delay = Math.random() * 50 + 50;
            setTimeout(() => {
              if (cancelled) return;
              let flickerCount = 0;
              const flickerInterval = setInterval(() => {
                if (cancelled) {
                  clearInterval(flickerInterval);
                  return;
                }
                setDigits((prev) => {
                  const newDigits = [...prev];
                  newDigits[i] = Math.floor(Math.random() * 10).toString();
                  return newDigits;
                });
                setOpacities((prev) => {
                  const newOpacities = [...prev];
                  newOpacities[i] = Math.random() * 0.8 + 0.2;
                  return newOpacities;
                });

                if (++flickerCount >= 10) {
                  clearInterval(flickerInterval);
                  setOpacities((prev) => {
                    const newOpacities = [...prev];
                    newOpacities[i] = 1;
                    return newOpacities;
                  });
                  resolve();
                }
              }, 100);
            }, delay);
          })
      );

      await Promise.all(promises);
      if (!cancelled) setPhase("countdown");
    };

    runBlinkAnimation();

    return () => {
      cancelled = true;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "countdown") return;

    const updateCountdown = () => {
      const now = Date.now();
      let diff = targetTimestamp * 1000 - now;
      if (diff < 0) diff = 0;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const newDigits = [
        ...days.toString().padStart(2, "0"),
        ...hours.toString().padStart(2, "0"),
        ...minutes.toString().padStart(2, "0"),
      ];

      setDigits(newDigits);
    };

    updateCountdown();
    countdownIntervalRef.current = setInterval(updateCountdown, 1000);

    return () => {
      if (countdownIntervalRef.current)
        clearInterval(countdownIntervalRef.current);
    };
  }, [phase]);

  return (
    <div className={styles.container}>
      <div className={styles.timeContainer}>
        {["Days", "Hours", "Mins"].map((label, groupIdx) => (
          <div key={groupIdx} className={styles.group}>
            <div className={styles.digits}>
              {digits
                .slice(groupIdx * 2, groupIdx * 2 + 2)
                .map((digit, index) => (
                  <span
                    key={index}
                    className={styles.number}
                    style={{ opacity: opacities[groupIdx * 2 + index] }}
                  >
                    {digit}
                  </span>
                ))}
            </div>
            {groupIdx < 2 && <span className={styles.colon}>:</span>}
          </div>
        ))}
      </div>
      <div className={styles.labelsRow}>
        <div className={styles.label}>DAYS</div>
        <div className={styles.label}>HOURS</div>
        <div className={styles.label}>MINS</div>
      </div>
    </div>
  );
};

export default Countdown;
