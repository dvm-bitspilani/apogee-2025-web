// import { Html } from "@react-three/drei";
import styles from "./navbar.module.scss";
import logo from "../../../src/assets/landing-logo.png";
import button from "../../../src/assets/register-btn.png";
import grunge from "../../../src/assets/nav-grunge.png";
// import bg from "../../../src/assets/nav-bg.png";
import home from "../../../src/assets/home.png";
import about from "../../../src/assets/about.png";
import events from "../../../src/assets/events.png";
import speaker from "../../../src/assets/speaker.png";
import contact from "../../../src/assets/contact.png";
import screw from "../../../src/assets/screw.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.container}>
            <img className={styles.grunge} src={grunge} alt="" />
            <div className={styles.content}>
              <img src={home} alt="" />
              <div className={styles.screw}>
                <img src={screw} alt="" />
              </div>
              <img src={about} alt="" />
              <div className={styles.screw}>
                <img src={screw} alt="" />
              </div>
              <img src={events} alt="" />
              <div className={styles.screw}>
                <img src={screw} alt="" />
              </div>
              <img src={speaker} alt="" />
              <div className={styles.screw}>
                <img src={screw} alt="" />
              </div>
              <img src={contact} alt="" />
            </div>
          </div>
          <div className={styles.register}>
            <img src={button} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
