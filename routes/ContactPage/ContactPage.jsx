import styles from "./contactPage.module.scss";

import Contact from "../../components/Contact/Contact";
import OverlayBackBtn from "../../components/Overlay/OverlayBackBtn/OverlayBackBtn";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <OverlayBackBtn isDiffRoute={true} />
      <Contact />
    </div>
  );
}
