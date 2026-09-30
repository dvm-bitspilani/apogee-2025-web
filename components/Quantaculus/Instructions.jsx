import styles from './Quantaculus.module.scss';
export default function Instructions({ onQuizOpen, onExit }) {
  return <div className={styles.instructions}>
    <h1>INSTRUCTIONS</h1>
    <ul><li>Five sample questions inspired by the original Quantaculus quiz interface.</li>
      <li>Five minutes to explore. Use NEXT and PREV to revisit any question.</li>
      <li>Scoring: +1 for a correct answer, −1 for an incorrect answer, 0 for an unanswered question.</li>
      <li>Submit to see your local score. Your answers are kept in memory only; reloading resets the demo.</li>
      <li>This archived interface does not submit a real competition entry.</li></ul>
    <div className={styles.instructionsButtons}><button onClick={onQuizOpen}>START DEMO</button><button onClick={onExit} className={styles.logout}>BACK</button></div>
  </div>;
}
