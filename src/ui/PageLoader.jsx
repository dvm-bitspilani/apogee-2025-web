import styles from "../../components/LoadingScreen/loading.module.scss";

export default function PageLoader() {
  return <div className="page-loader" role="status" aria-label="Loading">
    <div className={styles.loader} aria-hidden="true">
      <div className={styles.bgGlow} style={{ opacity: 1 }} />
      <div className={styles.circle}><div className={styles.waveGenerator} /><div className={styles.waveGenerator} /></div>
    </div>
  </div>;
}
