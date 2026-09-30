import { readQuizResult, clearQuizResult } from "../src/portfolio/demo.js";
import { Link } from "react-router";
import styles from "../components/Quantaculus/Quantaculus.module.scss";
export default function QuantaculusSubmitted() {
  const state = readQuizResult();
  return <div className={styles.pageContainer}><Link className="demo-home" to="/">← City</Link><div className={styles.submittedBox}>
    <p>Demo complete!</p>{state ? <p>{state.correct} / {state.total} correct · {state.attempted} attempted · Score: {state.score}</p> : <p>Play the sample quiz to see your score.</p>}
    <p className="demo-note">No competition entry was submitted. Refreshing clears this result.</p>
    <Link to="/quantaculus" onClick={clearQuizResult} className={styles.logout}>PLAY AGAIN</Link>
  </div></div>;
}
