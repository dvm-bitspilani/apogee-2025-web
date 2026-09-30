import styles from "./Quantaculus.module.scss";
import { sampleVisitor } from "../../src/portfolio/demo.js";
export default function Login({ onLoginSuccess }) {
  return <div className={styles.loginBox}>
    <h1>QUANTACULUS</h1><h3>Portfolio quiz demo</h3>
    <form onSubmit={event => { event.preventDefault(); onLoginSuccess(); }} className={styles.loginForm}>
      <label htmlFor="sample-visitor" className={styles.label}>Sample visitor</label>
      <input id="sample-visitor" value={sampleVisitor.name} readOnly />
      <p className="demo-note">Try five sample questions. No login, credentials or submission to a server.</p>
      <input type="submit" value="Enter demo" className={styles.submit} />
    </form>
  </div>;
}
