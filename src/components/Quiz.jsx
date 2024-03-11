import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Questions from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  

  const isCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSaveAnswer(answer) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isCompleted) {
    return <Summary userAnswer={userAnswers} index={activeQuestionIndex}/>
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        skipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
