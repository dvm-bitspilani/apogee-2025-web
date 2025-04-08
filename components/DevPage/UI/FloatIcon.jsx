import styles from "./FloatIcon.module.scss";

function FloatIcon(props) {
  return (
    <div className={styles.banner + " " + props.className}>
      {props.children}
    </div>
  );
}

export default FloatIcon;
