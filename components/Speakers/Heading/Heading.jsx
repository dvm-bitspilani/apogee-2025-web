import React from "react";
import styles from "./heading.module.scss";
import heading from "../../../src/assets/Speakers/heading.png";

export default function Heading() {
  return (
    <div className={styles.heading}>
      <img src={heading} alt="Speakers" />
    </div>
  );
}
