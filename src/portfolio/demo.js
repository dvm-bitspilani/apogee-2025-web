// Deliberately local: no authentication, network, browser storage or personal data.
export const sampleVisitor = Object.freeze({ name: "Sample Visitor", email: "visitor@example.com", phone: "9999999999" });
export const categories = [{id:1,name:"Technology"},{id:2,name:"Innovation"},{id:3,name:"Arts & Literature"}];
export const events = [{id:1,name:"Robowars"},{id:2,name:"Stock Market Simulator"},{id:3,name:"International Coding League"},{id:4,name:"APOGEE Innovation Challenge"}];
export const colleges = {data:[{id:1,name:"BITS Pilani"},{id:2,name:"Sample College"}]};
const papers = [
  ["What is the next number in the sequence 2, 4, 8, 16?", ["18","24","32","64"], 2],
  ["A train covers 120 km in 2 hours. What is its average speed?", ["30 km/h","60 km/h","90 km/h","120 km/h"], 1],
  ["Which number is prime?", ["21","27","29","33"], 2],
  ["A fair coin is tossed twice. What is the probability of two heads?", ["1/2","1/3","1/4","3/4"], 2],
  ["How many degrees are in the interior angles of a triangle?", ["90°","180°","270°","360°"], 1]
];
export const questions = papers.map(([text, labels, correct], index) => ({ id:index+1, text, options: labels.map((text,i)=>({id:i+1,text})), correct:correct+1 }));
export function scoreQuiz(answers) {
  let correct = 0, attempted = 0;
  for (const question of questions) { const answer = answers.find(a=>a.question_id===question.id); if (answer) { attempted++; if(answer.option_id===question.correct) correct++; } }
  return { correct, attempted, total:questions.length, score:correct - (attempted-correct) };
}
export async function previewRegistration() { return { message:"Demo registration complete. No account, email or payment was created." }; }

let quizResult = null;
export function rememberQuizResult(answers) { quizResult = scoreQuiz(answers); }
export function readQuizResult() { return quizResult; }
export function clearQuizResult() { quizResult = null; }
