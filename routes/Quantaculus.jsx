import { Link } from "react-router";
import styles from "../components/Quantaculus/Quantaculus.module.scss";
import backStyles from "../components/Overlay/OverlayBackBtn/backBtn.module.scss";

export default function Quantaculus() {
  return <main className={styles.pageContainer}>
    <Link to="/" className={backStyles.backBtn} aria-label="Return home"><img src="/images/backBtnLanding.webp" alt="" /></Link>
    <div className={styles.loginBox}>
      <h1>QUANTACULUS</h1>
      <h3>This edition has ended.</h3>
    </div>
  </main>;
}
