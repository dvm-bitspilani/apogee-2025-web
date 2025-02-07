import styles from "./preloader.module.scss";
import loader1 from "../../../src/assets/Register/preloaderimg1.png";
import loader2 from "../../../src/assets/Register/preloaderimg2.png";
import loader3 from "../../../src/assets/Register/preloaderimg3.png";

const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.image1}>
          <img src={loader1} alt="Loader 1" className={styles.rotatingImage1} />
        </div>
        <div className={styles.image2}>
          <img src={loader2} alt="Loader 2" className={styles.rotatingImage2} />
        </div>
        <div className={styles.image3}>
          <img src={loader3} alt="Loader 3" className={styles.rotatingImage3} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
