import styles from "./Verticals.module.scss";
import semiCircle from "../../../src/assets/Devs/semiCircle2.svg";

function Verticals() {
  return <div className={styles.container}>
    <img src={semiCircle} alt="semicircle" />
  </div>;
}

export default Verticals;
