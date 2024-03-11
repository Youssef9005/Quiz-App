import Progress from "./Progress";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";
import { useState } from "react";

export default function Questions({questionIndex , onSelectAnswer, skipAnswer}) {

  const [answer , setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });


  let timer = 10000;

  if(answer.selectedAnswer) {
    timer = 1000;
  }

  if(answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectedAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect : null
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer ? true : false
      });

      setTimeout(() => {
        onSelectAnswer(answer)
      }, 2000)

    }, 1000);
  };

  let answerState = '';

  if(answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';

  } else if(answer.selectedAnswer){
    answerState =  'answered';
  }

  return (
    <div id="question">
      <Progress
      key={timer}
        onTimeout={answer.selectedAnswer === '' ? skipAnswer : null}
        timeout={timer}
        mode={answerState}
      />

      <h2>{QUESTIONS[questionIndex].text}</h2>

      <Answers
        selectedAnswer={answer.selectedAnswer}
        answers={QUESTIONS[questionIndex].answers }
        answerState={answerState}
        onSelect={handleSelectedAnswer}
      />
    </div>
  );
}
