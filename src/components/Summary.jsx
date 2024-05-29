import trophyLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../data/questions";

export default function Summary({ answers }) {
  const skippedAnswers = answers.filter((answer) => answer == null);
  const correctAnswers = answers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedShare = Math.round(
    (skippedAnswers.length / answers.length) * 100
  );
  const correctShare = Math.round(
    (correctAnswers.length / answers.length) * 100
  );

  const wrongShare = 100 - skippedShare - correctShare;

  return (
    <div id="summary">
      <img src={trophyLogo} alt="trophy icon" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">correctly answered</span>
        </p>
        <p>
          <span className="number">{wrongShare}%</span>
          <span className="text">incorrectly answered</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
