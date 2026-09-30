import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Quantaculus.module.scss";
import { questions, rememberQuizResult } from "../../src/portfolio/demo.js";
export default function Quiz() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [deadline] = useState(() => Date.now() + 5 * 60 * 1000);
  const [remaining, setRemaining] = useState(300);
  useEffect(() => {
    const timer = setInterval(() => setRemaining(Math.max(0, Math.ceil((deadline - Date.now()) / 1000))), 1000);
    return () => clearInterval(timer);
  }, [deadline]);
  useEffect(() => { if (remaining === 0) { rememberQuizResult(answers); navigate("/quantaculus/submitted", { replace:true }); } }, [remaining, answers, navigate]);
  const question = questions[current];
  const select = optionId => setAnswers(previous => [...previous.filter(answer => answer.question_id !== question.id), { question_id:question.id, option_id:optionId }]);
  const submit = () => { rememberQuizResult(answers); navigate("/quantaculus/submitted"); };
  const time = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2,"0")}`;
  return <div className={styles.instructions}>
    <div className={styles.header}><div className={styles.questionIndex}>Q{current+1}<span> / {questions.length}</span></div><div className={styles.timer}>Demo time: <strong>{time}</strong></div><div className={styles.mobileTimer}>Demo time: <strong>{time}</strong></div></div>
    <div className={styles.problem}><span>{question.text}</span></div>
    <fieldset className={styles.answer}><legend className="visually-hidden">Choose one answer</legend>
      {question.options.map(option => <div key={option.id} className={styles.option}>
        <input type="radio" name={`question-${question.id}`} id={`answer-${question.id}-${option.id}`} checked={answers.some(answer=>answer.question_id===question.id && answer.option_id===option.id)} onChange={()=>select(option.id)} />
        <label htmlFor={`answer-${question.id}-${option.id}`}>{option.text}</label>
      </div>)}
    </fieldset>
    <div className={styles.navButtons}><button disabled={current===0} onClick={()=>setCurrent(value=>value-1)}>PREV</button><button onClick={submit} className={styles.submitBtn}>SUBMIT DEMO</button><button disabled={current===questions.length-1} onClick={()=>setCurrent(value=>value+1)}>NEXT</button></div>
    <button onClick={submit} className={styles.submitBtnMobile}>SUBMIT DEMO</button>
    <p className="demo-note">{answers.length} of {questions.length} answered · Nothing is sent or saved.</p>
  </div>;
}
