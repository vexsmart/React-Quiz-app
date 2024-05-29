import quizLogo from "../assets/quiz-logo.png";

export default function Header(props) {
  return (
    <header>
      <img src={quizLogo} alt="a quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
