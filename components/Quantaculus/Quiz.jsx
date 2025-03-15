import React, { useState, useEffect } from "react";
import * as styles from "./Quantaculus.module.scss";
import Countdown from 'react-countdown';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [startTime, setStartTime] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [questionTimers, setQuestionTimers] = useState({});
  // const [isReloadAttempted, setIsReloadAttempted] = useState(false);

  // Prevent page reload
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     setIsReloadAttempted(true);
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = ""; // Prevents the reload
  //     setIsReloadAttempted(true);

  //     // Show an alert after 3 seconds
  //     setTimeout(() => {
  //       alert("You cannot reload the page!");
  //     }, 3000);
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  const fetchQuestions = async () => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        throw new Error('Missing JWT token');
      }

      const response = await fetch("https://bits-apogee.org/2025/main/quanta/question-paper/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error fetching questions');
      }

      const data = await response.json();
      setQuestions(data);
      // localStorage.setItem('startTime', data.start_time);
      setStartTime(parseInt(data.start_time) * 1000);

      // Initialize timers for each question
      const initialTimers = Object.fromEntries(
        Array.from({ length: 80 }, (_, index) => [index, 25])
      );
      setQuestionTimers(initialTimers);

      // console.log("questions:", questions);
      // console.log("question_paper:", questions?.question_paper);
      // console.log("currentQuestion:", currentQuestion);

    } catch (error) {
      // alert(error);
      if (confirm(error)) {
        window.location.reload();
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!questions?.question_paper?.length) return;

    const timer = setInterval(() => {
      setQuestionTimers((prevTimers) => {
        if (prevTimers[currentQuestion] > 0) {
          return { ...prevTimers, [currentQuestion]: prevTimers[currentQuestion] - 1 };
        } else {
          clearInterval(timer);
          handleNext();
          return prevTimers;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, questions?.question_paper]);


  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.question_paper.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSelect = (optionId) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];

      const existingIndex = updatedAnswers.findIndex(
        (answer) => answer.question_id === currentQuestion + 1
      );

      if (existingIndex !== -1) {
        updatedAnswers[existingIndex] = {
          question_id: currentQuestion + 1,
          option_id: optionId,
        };
      } else {
        updatedAnswers.push({
          question_id: currentQuestion + 1,
          option_id: optionId,
        });
      }

      return updatedAnswers;
    });
  };

  const setCountdownRef = (countdown) => {
    if (countdown) {
      countdownApi = countdown.getApi();
    }
  };

  const handleSubmit = async (isAutomatic = false) => {
    if (!isAutomatic) {
      const shouldSubmit = window.confirm("Are you sure you want to submit your answers?");
      if (!shouldSubmit) return; // Exit if user cancels confirmation
    }

    const formattedData = selectedAnswers.map((answer) => ({
      option_id: answer.option_id,
    }));

    const finalData = { start_time: startTime, answers: formattedData };

    try {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        throw new Error('Missing JWT token');
      }

      const response = await fetch("https://bits-apogee.org/2025/main/quanta/answers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        alert("Answers submitted successfully!");
        window.location.href = "/quantaculus/submitted"; // Redirect to submitted page
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Error submitting answers');
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("questionTimers", JSON.stringify(questionTimers));
  // }, [questionTimers]);

  // Timer logic
  // useEffect(() => {
  //   if (questions.length === 0) return;

  //   const timer = setInterval(() => {
  //     setQuestionTimers((prevTimers) => {
  //       if (prevTimers[currentQuestion] > 0) {
  //         const updatedTimers = { ...prevTimers, [currentQuestion]: prevTimers[currentQuestion] - 1 };
  //         localStorage.setItem("questionTimers", JSON.stringify(updatedTimers));
  //         return updatedTimers;
  //       } else {
  //         clearInterval(timer);
  //         return prevTimers;
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [currentQuestion, questions.length]);

  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    );
  };

  return (
    <div
      className={styles.instructions}
      // style={{ overflowY: questions.question_paper[currentQuestion].image ? "hidden" : "scroll" }}
    >
      {!isLoading ? (
        <>
          <div className={styles.header}>
            <div className={styles.questionIndex}>
              Q{currentQuestion + 1} <span> / {questions.question_paper.length}</span>
            </div>
            <div className={styles.timer}>
              <span>Time Left for Quiz : <strong><Countdown renderer={renderer} zeroPadTime={2} autoStart="true" date={startTime + 25 * 60 * 1000} onComplete={() => handleSubmit(true)} /> min</strong></span>
            </div>
            <div className={styles.timer}>
              <span>Time Left for Question {[currentQuestion + 1]} : <strong>{questionTimers[currentQuestion]} sec</strong></span>
            </div>
            <div className={styles.mobileTimer}>
              <span>Time Left for Quiz : <strong><Countdown renderer={renderer} zeroPadTime={2} autoStart="true" date={startTime + 15 * 60 * 1000} onComplete={() => handleSubmit(true)} /> min</strong></span>
              <span>Time Left for Question {[currentQuestion + 1]} : <strong>{questionTimers[currentQuestion]} sec</strong></span>
            </div>
          </div>

          <div className={styles.problem}>
            <span>{questions.question_paper[currentQuestion].text}</span>
            <div className={styles.problemImage}>
              <img
                src={questions.question_paper[currentQuestion].image}
                alt="Problem"
                // style={{ display: questions.question_paper[currentQuestion].image ? "block" : "none" }}
              />
            </div>
          </div>
          <form action="" className={styles.answer}>
            {questions.question_paper[currentQuestion].options.map(
              (option, index) => (
                <div
                  key={index}
                  className={styles.option}
                  style={{
                    cursor: questionTimers[currentQuestion] === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name={`option-${currentQuestion}`}
                    id={`option-${currentQuestion}-${index}`}
                    checked={
                      selectedAnswers.some(
                        (answer) =>
                          answer.question_id === currentQuestion + 1 &&
                          answer.option_id === option.id
                      )
                    }
                    onChange={() => handleSelect(option.id)}
                    disabled={questionTimers[currentQuestion] === 0}
                  />
                  <label
                    htmlFor={`option-${currentQuestion}-${index}`}
                    style={{
                      cursor: questionTimers[currentQuestion] === 0 ? "not-allowed" : "pointer",
                    }}
                  >
                    {option.text}
                  </label>
                </div>
              )
            )}
          </form>

          <div className={styles.navButtons}>
            <button disabled={currentQuestion === 0} onClick={handlePrev}>
              PREV
            </button>

            <button onClick={() => handleSubmit(false)} className={styles.submitBtn}>
              SUBMIT
            </button>

            <button disabled={currentQuestion === questions.question_paper.length - 1} onClick={handleNext}>
              NEXT
            </button>
          </div>
          <button onClick={() => handleSubmit(false)} className={styles.submitBtnMobile}>
            SUBMIT
          </button>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;