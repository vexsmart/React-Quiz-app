import { useState } from "react";
import ProgressTimer from "./ProgressTimer";
import Answers from "./Answers";
import QUESTIONS from "../data/questions";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectAnswer && answer.selectAnswer !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <ProgressTimer
        timeout={timer}
        onTimeout={answer.selectAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        answerState={answerState}
        selectedAnswer={answer.selectAnswer}
        onSelect={handleSelectAnswer}
      />
      <div id="skip-action">
        <button onClick={onSkipAnswer}>skip</button>
      </div>
    </div>
  );
}
