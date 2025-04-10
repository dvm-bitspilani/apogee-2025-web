import Background from "three/src/renderers/common/Background.js";
import styles from "./FloatIcon.module.scss";
import React, { forwardRef } from "react";

const FloatIcon = forwardRef((props, ref) => {
  return (
    <div
      className={styles.banner + " " + props.className}
      onClick={props.onClick}
      ref={ref}
      style={{
        background: `center center / contain no-repeat url(${props.banner})`,
      }}
    >
      {props.children}
    </div>
  );
});

export default FloatIcon;
