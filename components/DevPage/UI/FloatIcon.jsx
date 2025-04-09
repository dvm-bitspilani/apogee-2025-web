import styles from "./FloatIcon.module.scss";

function FloatIcon(props) {
  return (
    <div className={styles.banner + " " + props.className} onClick={props.onClick} ref={props.ref}>
      {props.children}
    </div>
  );
}

export default FloatIcon;
