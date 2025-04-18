import styles from "./backBtn.module.scss";


export default function OverlayBackBtn({
  isDiffRoute = false,
  handleClick,
  ...props
}) {
  return (
    <button className={styles.backBtn} onClick={handleClick} {...props}>
      <img
        src="/images/backBtnLanding.png"
        alt="back button"
        draggable={false}
      />
    </button>
  );
}
