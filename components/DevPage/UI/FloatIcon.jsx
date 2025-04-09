import styles from "./FloatIcon.module.scss";
import React, { forwardRef } from "react";

const FloatIcon = forwardRef((props, ref) => {
  return (
    <div
      className={styles.banner + " " + props.className}
      onClick={props.onClick}
      ref={ref}
    >
      {props.children}
    </div>
  );
});

export default FloatIcon;
