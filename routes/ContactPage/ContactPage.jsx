import styles from "./contactPage.module.scss";

import Contact from "../../components/Contact/Contact";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Contact />
    </div>
  );
}
