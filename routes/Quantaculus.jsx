import { useState } from "react";
import { Link } from "react-router";
import styles from "../components/Quantaculus/Quantaculus.module.scss";
import Login from "../components/Quantaculus/Login";
import Instructions from "../components/Quantaculus/Instructions";
import Quiz from "../components/Quantaculus/Quiz";
export default function Quantaculus() {
  const [step, setStep] = useState("entry");
  return <div className={styles.pageContainer}><Link className="demo-home" to="/">← City</Link>
    {step === "entry" && <Login onLoginSuccess={()=>setStep("instructions")} />}
    {step !== "entry" && <div className={styles.contentBox}>{step === "instructions" ? <Instructions onQuizOpen={()=>setStep("quiz")} onExit={()=>setStep("entry")} /> : <Quiz />}</div>}
  </div>;
}
