import React, { useState, useCallback } from "react";
import QUESTIONS from "../data/questions";

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz(props) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const currentQuestion = selectedAnswers.length;

  const quizCompleted = currentQuestion === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setSelectedAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (quizCompleted) {
    return <Summary answers={selectedAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestion}
        index={currentQuestion}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectedAnswer}
      />
    </div>
  );
}
